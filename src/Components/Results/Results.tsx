import { createContext, useContext, useEffect, useState } from 'react';
import './Results.css';
import ResultsError from './ResultsError/ResultsError';
import Loading from './Loading/Loading';
import { EligibilityResults, Program, UrgentNeed } from '../../Types/Results';
import { getEligibility } from '../../apiCalls';
import { Context } from '../Wrapper/Wrapper';
import { Navigate, useParams } from 'react-router-dom';
import ResultsHeader from './Header/Header';
import ProgramPage from './ProgramPage/ProgramPage';
import ResultsTabs from './Tabs/Tabs';
import Needs from './Needs/Needs';
import Programs from './Programs/Programs';
import MoreHelp from './MoreHelp/MoreHelp';
import NavigatorPage from './NavigatorPage/NavigatorPage';

type WrapperResultsContext = {
  programs: Program[];
  needs: UrgentNeed[];
  filtersChecked: string[];
  setFiltersChecked: (newFiltersChecked: string[]) => void;
};

type ResultsProps = {
  type: 'program' | 'need' | 'navigator';
};

export const ResultsContext = createContext<WrapperResultsContext | undefined>(undefined);

export function useResultsContext() {
  const context = useContext(ResultsContext);

  if (context === undefined) {
    throw new Error('Component not in results context');
  }

  return context;
}

function findProgramById(programs: Program[], id: string) {
  return programs.find((program) => String(program.program_id) === id);
}

const Results = ({ type }: ResultsProps) => {
  const { locale } = useContext(Context);
  const { uuid, programId } = useParams();

  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [apiResults, setApiResults] = useState<EligibilityResults | undefined>();

  const fetchResults = async () => {
    try {
      const rawEligibilityResponse = (await getEligibility(uuid, locale)) as EligibilityResults;
      setApiResults(rawEligibilityResponse);
    } catch (error) {
      setApiError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const [filtersChecked, setFiltersChecked] = useState<{}>({
    citizen: true,
    non_citizen: false,
    green_card: false,
    refugee: false,
    gc_5plus: false,
    gc_18plus_no5: false,
    gc_under18_no5: false,
    other: false,
    otherWithWorkPermission: false,
    otherHealthCareUnder19: false,
    otherHealthCarePregnant: false,
  });
  const [programs, setPrograms] = useState<Program[]>([]);
  const [needs, setNeeds] = useState<UrgentNeed[]>([]);

  useEffect(() => {
    const filtersCheckedStrArr = Object.entries(filtersChecked)
      .filter(filterKeyValPair => {
        return filterKeyValPair[1];
      })
      .map(filteredKeyValPair => filteredKeyValPair[0]);

    if (apiResults === undefined) {
      setNeeds([]);
      setPrograms([]);
      return;
    }

    setNeeds(apiResults.urgent_needs);
    setPrograms(
      apiResults.programs.filter((program) => {
        return (
          program.legal_status_required.some((status) => filtersCheckedStrArr.includes(status)) && program.eligible
        );
      }),
    );
    setLoading(false);
  }, [filtersChecked, apiResults]);

  if (loading) {
    return (
      <div className="results-loading-container">
        <Loading />
      </div>
    );
  } else if (apiError) {
    return <ResultsError />;
  } else if (programId === undefined && (type === 'program' || type === 'need')) {
    return (
      <ResultsContext.Provider
        value={{
          programs,
          needs,
          filtersChecked,
          setFiltersChecked,
        }}
      >
        <ResultsHeader type={type} />
        <ResultsTabs currentTab={type} />
        {type === 'need' ? <Needs /> : <Programs />}
        <MoreHelp />
      </ResultsContext.Provider>
    );
  }

  if (programId === undefined) {
    return <Navigate to={`/${uuid}/results/benefits`} />;
  }

  const program = findProgramById(programs, programId);

  if (program === undefined) {
    return <Navigate to={`/${uuid}/results/benefits`} />;
  }

  if (type === 'navigator') {
    return <NavigatorPage navigators={program.navigators} />;
  }

  return <ProgramPage program={program} />;
};

export default Results;

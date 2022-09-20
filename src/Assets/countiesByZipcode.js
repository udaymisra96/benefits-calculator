const countiesByZipcode = {
  '80002': [ 'Adams County', 'Denver County', 'Jefferson County' ],
  '80003': [ 'Adams County', 'Jefferson County' ],
  '80004': [ 'Jefferson County' ],
  '80005': [ 'Broomfield County', 'Jefferson County' ],
  '80007': [ 'Boulder County', 'Broomfield County', 'Jefferson County' ],
  '80010': [ 'Adams County', 'Arapahoe County', 'Denver County' ],
  '80011': [ 'Adams County', 'Arapahoe County', 'Denver County' ],
  '80012': [ 'Arapahoe County', 'Denver County' ],
  '80013': [ 'Arapahoe County' ],
  '80014': [ 'Arapahoe County', 'Denver County' ],
  '80015': [ 'Arapahoe County', 'Denver County' ],
  '80016': [
    'Arapahoe County',
    'Denver County',
    'Douglas County',
    'Elbert County'
  ],
  '80017': [ 'Arapahoe County' ],
  '80018': [ 'Adams County', 'Arapahoe County' ],
  '80019': [ 'Adams County', 'Arapahoe County', 'Denver County' ],
  '80020': [
    'Adams County',
    'Boulder County',
    'Broomfield County',
    'Jefferson County'
  ],
  '80021': [ 'Boulder County', 'Broomfield County', 'Jefferson County' ],
  '80022': [ 'Adams County', 'Denver County' ],
  '80023': [
    'Adams County',
    'Boulder County',
    'Broomfield County',
    'Weld County'
  ],
  '80024': [ 'Adams County' ],
  '80025': [ 'Boulder County', 'Jefferson County' ],
  '80026': [ 'Boulder County', 'Broomfield County', 'Weld County' ],
  '80027': [ 'Boulder County', 'Broomfield County', 'Jefferson County' ],
  '80030': [ 'Adams County', 'Jefferson County' ],
  '80031': [ 'Adams County', 'Broomfield County', 'Jefferson County' ],
  '80033': [ 'Denver County', 'Jefferson County' ],
  '80045': [ 'Adams County', 'Arapahoe County', 'Denver County' ],
  '80101': [ 'Arapahoe County', 'Elbert County' ],
  '80102': [ 'Adams County', 'Arapahoe County', 'Elbert County', 'Weld County' ],
  '80103': [
    'Adams County',
    'Arapahoe County',
    'Elbert County',
    'Morgan County'
  ],
  '80104': [ 'Douglas County' ],
  '80105': [
    'Adams County',
    'Arapahoe County',
    'Elbert County',
    'Lincoln County',
    'Washington County'
  ],
  '80106': [ 'Douglas County', 'El Paso County', 'Elbert County' ],
  '80107': [ 'Arapahoe County', 'Douglas County', 'Elbert County' ],
  '80108': [ 'Douglas County' ],
  '80109': [ 'Douglas County' ],
  '80110': [ 'Arapahoe County', 'Denver County' ],
  '80111': [ 'Arapahoe County', 'Denver County' ],
  '80112': [ 'Arapahoe County', 'Douglas County' ],
  '80113': [ 'Arapahoe County', 'Denver County' ],
  '80116': [ 'Douglas County', 'Elbert County' ],
  '80117': [ 'Elbert County' ],
  '80118': [ 'Douglas County', 'El Paso County', 'Elbert County' ],
  '80120': [ 'Arapahoe County', 'Douglas County' ],
  '80121': [ 'Arapahoe County' ],
  '80122': [ 'Arapahoe County', 'Douglas County' ],
  '80123': [ 'Arapahoe County', 'Denver County', 'Jefferson County' ],
  '80124': [ 'Arapahoe County', 'Douglas County' ],
  '80125': [ 'Arapahoe County', 'Douglas County', 'Jefferson County' ],
  '80126': [ 'Arapahoe County', 'Douglas County' ],
  '80127': [ 'Denver County', 'Douglas County', 'Jefferson County' ],
  '80128': [ 'Arapahoe County', 'Douglas County', 'Jefferson County' ],
  '80129': [ 'Arapahoe County', 'Douglas County' ],
  '80130': [ 'Douglas County' ],
  '80131': [ 'Douglas County' ],
  '80132': [ 'Douglas County', 'El Paso County' ],
  '80133': [ 'Douglas County', 'El Paso County', 'Teller County' ],
  '80134': [ 'Arapahoe County', 'Douglas County', 'Elbert County' ],
  '80135': [
    'Douglas County',
    'El Paso County',
    'Jefferson County',
    'Park County',
    'Teller County'
  ],
  '80136': [ 'Adams County', 'Arapahoe County', 'Elbert County', 'Weld County' ],
  '80137': [ 'Adams County', 'Arapahoe County', 'Denver County' ],
  '80138': [ 'Arapahoe County', 'Douglas County', 'Elbert County' ],
  '80202': [ 'Denver County' ],
  '80203': [ 'Denver County' ],
  '80204': [ 'Denver County', 'Jefferson County' ],
  '80205': [ 'Denver County' ],
  '80206': [ 'Denver County' ],
  '80207': [ 'Denver County' ],
  '80209': [ 'Arapahoe County', 'Denver County' ],
  '80210': [ 'Arapahoe County', 'Denver County' ],
  '80211': [ 'Denver County' ],
  '80212': [ 'Adams County', 'Denver County', 'Jefferson County' ],
  '80214': [ 'Denver County', 'Jefferson County' ],
  '80215': [ 'Jefferson County' ],
  '80216': [ 'Adams County', 'Denver County' ],
  '80218': [ 'Denver County' ],
  '80219': [ 'Arapahoe County', 'Denver County', 'Jefferson County' ],
  '80220': [ 'Adams County', 'Arapahoe County', 'Denver County' ],
  '80221': [ 'Adams County', 'Denver County' ],
  '80222': [ 'Arapahoe County', 'Denver County' ],
  '80223': [ 'Arapahoe County', 'Denver County' ],
  '80224': [ 'Arapahoe County', 'Denver County' ],
  '80226': [ 'Denver County', 'Jefferson County' ],
  '80227': [ 'Denver County', 'Jefferson County' ],
  '80228': [ 'Jefferson County' ],
  '80229': [ 'Adams County' ],
  '80230': [ 'Arapahoe County', 'Denver County' ],
  '80231': [ 'Arapahoe County', 'Denver County' ],
  '80232': [ 'Denver County', 'Jefferson County' ],
  '80233': [ 'Adams County' ],
  '80234': [ 'Adams County', 'Broomfield County' ],
  '80235': [ 'Denver County', 'Jefferson County' ],
  '80236': [ 'Arapahoe County', 'Denver County', 'Jefferson County' ],
  '80237': [ 'Arapahoe County', 'Denver County' ],
  '80238': [ 'Adams County', 'Denver County' ],
  '80239': [ 'Adams County', 'Denver County' ],
  '80241': [ 'Adams County' ],
  '80246': [ 'Arapahoe County', 'Denver County' ],
  '80247': [ 'Arapahoe County', 'Denver County' ],
  '80249': [ 'Adams County', 'Denver County' ],
  '80260': [ 'Adams County' ],
  '80264': [ 'Denver County' ],
  '80290': [ 'Denver County' ],
  '80293': [ 'Denver County' ],
  '80294': [ 'Denver County' ],
  '80301': [ 'Boulder County' ],
  '80302': [ 'Boulder County' ],
  '80303': [ 'Boulder County', 'Jefferson County' ],
  '80304': [ 'Boulder County' ],
  '80305': [ 'Boulder County' ],
  '80310': [ 'Boulder County' ],
  '80401': [ 'Jefferson County' ],
  '80403': [
    'Boulder County',
    'Clear Creek County',
    'Gilpin County',
    'Jefferson County'
  ],
  '80419': [ 'Jefferson County' ],
  '80420': [ 'Lake County', 'Park County', 'Summit County' ],
  '80421': [ 'Clear Creek County', 'Jefferson County', 'Park County' ],
  '80422': [
    'Boulder County',
    'Clear Creek County',
    'Gilpin County',
    'Grand County',
    'Jefferson County'
  ],
  '80423': [ 'Eagle County', 'Grand County', 'Routt County', 'Summit County' ],
  '80424': [ 'Lake County', 'Park County', 'Summit County' ],
  '80425': [ 'Douglas County', 'Jefferson County' ],
  '80426': [ 'Eagle County', 'Garfield County', 'Routt County' ],
  '80427': [ 'Clear Creek County', 'Gilpin County', 'Jefferson County' ],
  '80428': [ 'Jackson County', 'Routt County' ],
  '80432': [ 'Park County' ],
  '80433': [ 'Douglas County', 'Jefferson County', 'Park County' ],
  '80434': [ 'Jackson County' ],
  '80435': [ 'Clear Creek County', 'Park County', 'Summit County' ],
  '80436': [ 'Clear Creek County', 'Grand County' ],
  '80438': [ 'Clear Creek County', 'Grand County' ],
  '80439': [
    'Clear Creek County',
    'Gilpin County',
    'Jefferson County',
    'Park County'
  ],
  '80440': [ 'Lake County', 'Park County', 'Summit County' ],
  '80442': [ 'Grand County' ],
  '80443': [ 'Eagle County', 'Lake County', 'Park County', 'Summit County' ],
  '80444': [ 'Clear Creek County', 'Park County', 'Summit County' ],
  '80446': [ 'Boulder County', 'Grand County', 'Jackson County' ],
  '80447': [
    'Boulder County',
    'Grand County',
    'Jackson County',
    'Larimer County'
  ],
  '80448': [
    'Clear Creek County',
    'Jefferson County',
    'Park County',
    'Summit County'
  ],
  '80449': [ 'Chaffee County', 'Fremont County', 'Lake County', 'Park County' ],
  '80451': [ 'Grand County' ],
  '80452': [
    'Clear Creek County',
    'Gilpin County',
    'Grand County',
    'Park County'
  ],
  '80453': [ 'Jefferson County' ],
  '80454': [ 'Jefferson County' ],
  '80455': [ 'Boulder County' ],
  '80456': [ 'Jefferson County', 'Park County', 'Summit County' ],
  '80457': [ 'Jefferson County' ],
  '80459': [
    'Eagle County',
    'Grand County',
    'Jackson County',
    'Routt County',
    'Summit County'
  ],
  '80461': [
    'Chaffee County',
    'Eagle County',
    'Lake County',
    'Park County',
    'Pitkin County',
    'Summit County'
  ],
  '80463': [ 'Eagle County', 'Grand County', 'Routt County' ],
  '80465': [ 'Jefferson County' ],
  '80466': [ 'Boulder County', 'Gilpin County', 'Grand County' ],
  '80467': [ 'Grand County', 'Rio Blanco County', 'Routt County' ],
  '80468': [ 'Clear Creek County', 'Grand County', 'Summit County' ],
  '80469': [ 'Rio Blanco County', 'Routt County' ],
  '80470': [ 'Clear Creek County', 'Jefferson County', 'Park County' ],
  '80471': [ 'Boulder County', 'Gilpin County' ],
  '80473': [ 'Grand County', 'Jackson County' ],
  '80475': [ 'Park County' ],
  '80476': [ 'Clear Creek County', 'Grand County', 'Summit County' ],
  '80477': [ 'Routt County' ],
  '80478': [ 'Grand County' ],
  '80479': [ 'Eagle County', 'Routt County' ],
  '80480': [
    'Grand County',
    'Jackson County',
    'Larimer County',
    'Routt County'
  ],
  '80481': [ 'Boulder County', 'Grand County' ],
  '80482': [
    'Boulder County',
    'Clear Creek County',
    'Gilpin County',
    'Grand County'
  ],
  '80483': [ 'Garfield County', 'Rio Blanco County', 'Routt County' ],
  '80487': [ 'Grand County', 'Jackson County', 'Routt County' ],
  '80488': [ 'Routt County' ],
  '80497': [ 'Clear Creek County', 'Grand County', 'Summit County' ],
  '80498': [ 'Eagle County', 'Grand County', 'Summit County' ],
  '80501': [ 'Boulder County', 'Weld County' ],
  '80503': [ 'Boulder County', 'Larimer County' ],
  '80504': [ 'Boulder County', 'Larimer County', 'Weld County' ],
  '80510': [ 'Boulder County', 'Grand County', 'Larimer County' ],
  '80511': [ 'Larimer County' ],
  '80512': [ 'Grand County', 'Jackson County', 'Larimer County' ],
  '80513': [ 'Boulder County', 'Larimer County', 'Weld County' ],
  '80514': [ 'Broomfield County', 'Weld County' ],
  '80515': [ 'Larimer County' ],
  '80516': [
    'Adams County',
    'Boulder County',
    'Broomfield County',
    'Weld County'
  ],
  '80517': [ 'Boulder County', 'Grand County', 'Larimer County' ],
  '80520': [ 'Weld County' ],
  '80521': [ 'Larimer County' ],
  '80524': [ 'Larimer County', 'Weld County' ],
  '80525': [ 'Larimer County', 'Weld County' ],
  '80526': [ 'Larimer County' ],
  '80528': [ 'Larimer County', 'Weld County' ],
  '80530': [ 'Weld County' ],
  '80532': [ 'Larimer County' ],
  '80534': [ 'Larimer County', 'Weld County' ],
  '80535': [ 'Larimer County' ],
  '80536': [ 'Larimer County' ],
  '80537': [ 'Larimer County', 'Weld County' ],
  '80538': [ 'Larimer County', 'Weld County' ],
  '80540': [ 'Boulder County', 'Larimer County' ],
  '80542': [ 'Weld County' ],
  '80543': [ 'Weld County' ],
  '80544': [ 'Boulder County' ],
  '80545': [ 'Larimer County' ],
  '80546': [ 'Weld County' ],
  '80547': [ 'Larimer County', 'Weld County' ],
  '80549': [ 'Larimer County', 'Weld County' ],
  '80550': [ 'Larimer County', 'Weld County' ],
  '80601': [ 'Adams County', 'Weld County' ],
  '80602': [ 'Adams County', 'Broomfield County', 'Weld County' ],
  '80603': [
    'Adams County',
    'Broomfield County',
    'Denver County',
    'Weld County'
  ],
  '80610': [ 'Weld County' ],
  '80611': [ 'Morgan County', 'Weld County' ],
  '80612': [ 'Larimer County', 'Weld County' ],
  '80615': [ 'Weld County' ],
  '80620': [ 'Weld County' ],
  '80621': [ 'Weld County' ],
  '80622': [ 'Weld County' ],
  '80623': [ 'Weld County' ],
  '80624': [ 'Weld County' ],
  '80631': [ 'Weld County' ],
  '80634': [ 'Weld County' ],
  '80640': [ 'Adams County' ],
  '80642': [ 'Adams County', 'Denver County', 'Weld County' ],
  '80643': [ 'Adams County', 'Weld County' ],
  '80644': [ 'Weld County' ],
  '80645': [ 'Weld County' ],
  '80648': [ 'Weld County' ],
  '80649': [ 'Morgan County', 'Weld County' ],
  '80650': [ 'Weld County' ],
  '80651': [ 'Weld County' ],
  '80652': [ 'Adams County', 'Morgan County', 'Weld County' ],
  '80653': [ 'Morgan County' ],
  '80654': [ 'Adams County', 'Morgan County', 'Weld County' ],
  '80701': [
    'Adams County',
    'Morgan County',
    'Washington County',
    'Weld County'
  ],
  '80705': [ 'Morgan County' ],
  '80720': [
    'Logan County',
    'Morgan County',
    'Washington County',
    'Yuma County'
  ],
  '80721': [ 'Phillips County', 'Sedgwick County' ],
  '80722': [ 'Logan County', 'Washington County' ],
  '80723': [ 'Morgan County', 'Washington County' ],
  '80726': [ 'Logan County', 'Sedgwick County' ],
  '80727': [ 'Yuma County' ],
  '80728': [ 'Logan County', 'Sedgwick County', 'Washington County' ],
  '80729': [ 'Weld County' ],
  '80731': [
    'Logan County',
    'Phillips County',
    'Sedgwick County',
    'Washington County',
    'Yuma County'
  ],
  '80733': [ 'Logan County', 'Morgan County', 'Washington County' ],
  '80734': [ 'Phillips County', 'Sedgwick County', 'Yuma County' ],
  '80735': [ 'Kit Carson County', 'Yuma County' ],
  '80736': [ 'Logan County' ],
  '80737': [ 'Phillips County', 'Sedgwick County' ],
  '80740': [ 'Lincoln County', 'Washington County' ],
  '80741': [
    'Logan County',
    'Morgan County',
    'Washington County',
    'Weld County'
  ],
  '80742': [ 'Logan County', 'Morgan County', 'Weld County' ],
  '80743': [ 'Logan County', 'Washington County', 'Yuma County' ],
  '80744': [ 'Phillips County', 'Sedgwick County' ],
  '80745': [ 'Logan County', 'Weld County' ],
  '80746': [ 'Phillips County' ],
  '80747': [ 'Logan County' ],
  '80749': [ 'Logan County', 'Phillips County', 'Sedgwick County' ],
  '80750': [
    'Logan County',
    'Morgan County',
    'Washington County',
    'Weld County'
  ],
  '80751': [ 'Logan County', 'Washington County' ],
  '80754': [ 'Logan County', 'Morgan County', 'Weld County' ],
  '80755': [ 'Yuma County' ],
  '80757': [
    'Adams County',
    'Arapahoe County',
    'Lincoln County',
    'Morgan County',
    'Washington County'
  ],
  '80758': [ 'Phillips County', 'Yuma County' ],
  '80759': [
    'Logan County',
    'Phillips County',
    'Washington County',
    'Yuma County'
  ],
  '80801': [ 'Washington County' ],
  '80802': [ 'Cheyenne County', 'Kiowa County', 'Kit Carson County' ],
  '80804': [ 'Kit Carson County', 'Lincoln County', 'Washington County' ],
  '80805': [ 'Cheyenne County', 'Kit Carson County', 'Yuma County' ],
  '80807': [ 'Cheyenne County', 'Kit Carson County', 'Yuma County' ],
  '80808': [ 'El Paso County', 'Elbert County' ],
  '80809': [ 'El Paso County', 'Teller County' ],
  '80810': [ 'Cheyenne County', 'Kiowa County', 'Kit Carson County' ],
  '80812': [ 'Kit Carson County', 'Washington County', 'Yuma County' ],
  '80813': [ 'El Paso County', 'Fremont County', 'Teller County' ],
  '80814': [ 'Teller County' ],
  '80815': [
    'Cheyenne County',
    'Kit Carson County',
    'Lincoln County',
    'Washington County'
  ],
  '80816': [ 'Fremont County', 'Park County', 'Teller County' ],
  '80817': [ 'El Paso County', 'Pueblo County' ],
  '80818': [ 'Lincoln County', 'Washington County' ],
  '80819': [ 'El Paso County', 'Teller County' ],
  '80820': [ 'Fremont County', 'Park County', 'Teller County' ],
  '80821': [
    'Cheyenne County',
    'Elbert County',
    'Kit Carson County',
    'Lincoln County'
  ],
  '80822': [ 'Kit Carson County', 'Washington County', 'Yuma County' ],
  '80823': [
    'Cheyenne County',
    'Crowley County',
    'Kiowa County',
    'Lincoln County'
  ],
  '80824': [ 'Kit Carson County', 'Yuma County' ],
  '80825': [
    'Cheyenne County',
    'Kiowa County',
    'Kit Carson County',
    'Lincoln County'
  ],
  '80827': [
    'Douglas County',
    'Jefferson County',
    'Park County',
    'Teller County'
  ],
  '80828': [
    'Arapahoe County',
    'Elbert County',
    'Lincoln County',
    'Washington County'
  ],
  '80829': [ 'El Paso County', 'Teller County' ],
  '80830': [ 'El Paso County', 'Elbert County', 'Lincoln County' ],
  '80831': [ 'El Paso County', 'Elbert County' ],
  '80832': [ 'El Paso County', 'Elbert County', 'Lincoln County' ],
  '80833': [
    'Crowley County',
    'El Paso County',
    'Elbert County',
    'Lincoln County',
    'Pueblo County'
  ],
  '80834': [ 'Cheyenne County', 'Kit Carson County', 'Washington County' ],
  '80835': [ 'El Paso County', 'Elbert County' ],
  '80836': [ 'Cheyenne County', 'Kit Carson County', 'Yuma County' ],
  '80840': [ 'El Paso County' ],
  '80860': [ 'El Paso County', 'Fremont County', 'Teller County' ],
  '80861': [
    'Cheyenne County',
    'Kit Carson County',
    'Washington County',
    'Yuma County'
  ],
  '80862': [ 'Cheyenne County', 'Kit Carson County', 'Lincoln County' ],
  '80863': [ 'Douglas County', 'El Paso County', 'Teller County' ],
  '80864': [
    'Crowley County',
    'El Paso County',
    'Lincoln County',
    'Pueblo County'
  ],
  '80902': [ 'El Paso County' ],
  '80903': [ 'El Paso County' ],
  '80904': [ 'El Paso County' ],
  '80905': [ 'El Paso County' ],
  '80906': [ 'El Paso County', 'Teller County' ],
  '80907': [ 'El Paso County' ],
  '80908': [ 'Douglas County', 'El Paso County', 'Elbert County' ],
  '80909': [ 'El Paso County' ],
  '80910': [ 'El Paso County' ],
  '80911': [ 'El Paso County' ],
  '80913': [ 'El Paso County' ],
  '80914': [ 'El Paso County' ],
  '80915': [ 'El Paso County' ],
  '80916': [ 'El Paso County' ],
  '80917': [ 'El Paso County' ],
  '80918': [ 'El Paso County' ],
  '80919': [ 'El Paso County' ],
  '80920': [ 'El Paso County' ],
  '80921': [ 'El Paso County', 'Teller County' ],
  '80922': [ 'El Paso County' ],
  '80923': [ 'El Paso County' ],
  '80924': [ 'El Paso County' ],
  '80925': [ 'El Paso County' ],
  '80926': [ 'El Paso County', 'Fremont County', 'Teller County' ],
  '80927': [ 'El Paso County' ],
  '80928': [ 'El Paso County', 'Pueblo County' ],
  '80929': [ 'El Paso County' ],
  '80930': [ 'El Paso County' ],
  '80938': [ 'El Paso County' ],
  '80939': [ 'El Paso County' ],
  '80951': [ 'El Paso County' ],
  '81001': [ 'Pueblo County' ],
  '81003': [ 'Pueblo County' ],
  '81004': [ 'Pueblo County' ],
  '81005': [ 'Custer County', 'Fremont County', 'Pueblo County' ],
  '81006': [ 'Pueblo County' ],
  '81007': [ 'Fremont County', 'Pueblo County' ],
  '81008': [ 'El Paso County', 'Pueblo County' ],
  '81019': [ 'Pueblo County' ],
  '81020': [ 'Huerfano County', 'Las Animas County', 'Pueblo County' ],
  '81021': [
    'Bent County',
    'Crowley County',
    'Kiowa County',
    'Lincoln County',
    'Otero County'
  ],
  '81022': [ 'Huerfano County', 'Pueblo County' ],
  '81023': [ 'Custer County', 'Pueblo County' ],
  '81024': [ 'Las Animas County' ],
  '81025': [
    'Crowley County',
    'El Paso County',
    'Lincoln County',
    'Pueblo County'
  ],
  '81027': [ 'Las Animas County' ],
  '81029': [ 'Baca County' ],
  '81030': [ 'Otero County' ],
  '81033': [ 'Crowley County' ],
  '81036': [
    'Bent County',
    'Cheyenne County',
    'Kiowa County',
    'Prowers County'
  ],
  '81038': [ 'Bent County' ],
  '81039': [
    'Crowley County',
    'Huerfano County',
    'Las Animas County',
    'Otero County',
    'Pueblo County'
  ],
  '81040': [
    'Alamosa County',
    'Costilla County',
    'Custer County',
    'Huerfano County',
    'Pueblo County',
    'Saguache County'
  ],
  '81041': [ 'Baca County', 'Prowers County' ],
  '81043': [ 'Prowers County' ],
  '81044': [ 'Baca County', 'Bent County' ],
  '81045': [ 'Cheyenne County', 'Kiowa County', 'Lincoln County' ],
  '81047': [ 'Baca County', 'Kiowa County', 'Prowers County' ],
  '81049': [ 'Baca County', 'Bent County', 'Las Animas County', 'Otero County' ],
  '81050': [
    'Bent County',
    'Crowley County',
    'Kiowa County',
    'Las Animas County',
    'Otero County'
  ],
  '81052': [ 'Baca County', 'Bent County', 'Kiowa County', 'Prowers County' ],
  '81054': [
    'Baca County',
    'Bent County',
    'Kiowa County',
    'Las Animas County',
    'Otero County'
  ],
  '81055': [ 'Costilla County', 'Huerfano County', 'Las Animas County' ],
  '81057': [ 'Bent County' ],
  '81058': [ 'Crowley County', 'Otero County' ],
  '81059': [ 'Las Animas County', 'Otero County', 'Pueblo County' ],
  '81062': [
    'Crowley County',
    'El Paso County',
    'Lincoln County',
    'Otero County',
    'Pueblo County'
  ],
  '81063': [ 'Crowley County', 'Lincoln County', 'Otero County' ],
  '81064': [ 'Baca County', 'Las Animas County' ],
  '81067': [
    'Crowley County',
    'Las Animas County',
    'Otero County',
    'Pueblo County'
  ],
  '81069': [ 'Custer County', 'Huerfano County', 'Pueblo County' ],
  '81071': [ 'Cheyenne County', 'Kiowa County', 'Prowers County' ],
  '81073': [
    'Baca County',
    'Bent County',
    'Las Animas County',
    'Prowers County'
  ],
  '81076': [
    'Crowley County',
    'Kiowa County',
    'Lincoln County',
    'Otero County'
  ],
  '81077': [ 'Otero County' ],
  '81081': [ 'Las Animas County' ],
  '81082': [ 'Las Animas County' ],
  '81084': [ 'Baca County', 'Prowers County' ],
  '81087': [ 'Baca County' ],
  '81089': [ 'Huerfano County', 'Las Animas County', 'Pueblo County' ],
  '81090': [ 'Baca County', 'Prowers County' ],
  '81091': [ 'Costilla County', 'Huerfano County', 'Las Animas County' ],
  '81092': [ 'Bent County', 'Kiowa County', 'Prowers County' ],
  '81101': [
    'Alamosa County',
    'Conejos County',
    'Costilla County',
    'Rio Grande County'
  ],
  '81120': [
    'Archuleta County',
    'Conejos County',
    'Costilla County',
    'Rio Grande County'
  ],
  '81121': [ 'Archuleta County', 'La Plata County' ],
  '81122': [
    'Archuleta County',
    'Hinsdale County',
    'La Plata County',
    'San Juan County'
  ],
  '81123': [
    'Alamosa County',
    'Conejos County',
    'Costilla County',
    'Huerfano County'
  ],
  '81124': [ 'Conejos County' ],
  '81125': [ 'Alamosa County', 'Rio Grande County', 'Saguache County' ],
  '81126': [ 'Costilla County' ],
  '81128': [ 'Archuleta County', 'Conejos County' ],
  '81129': [ 'Conejos County' ],
  '81130': [
    'Archuleta County',
    'Hinsdale County',
    'Mineral County',
    'Rio Grande County',
    'Saguache County',
    'San Juan County'
  ],
  '81131': [
    'Alamosa County',
    'Custer County',
    'Huerfano County',
    'Saguache County'
  ],
  '81132': [
    'Conejos County',
    'Mineral County',
    'Rio Grande County',
    'Saguache County'
  ],
  '81133': [ 'Costilla County', 'Huerfano County' ],
  '81136': [ 'Alamosa County', 'Saguache County' ],
  '81137': [ 'Archuleta County', 'La Plata County' ],
  '81138': [ 'Costilla County' ],
  '81140': [ 'Alamosa County', 'Conejos County', 'Rio Grande County' ],
  '81141': [ 'Conejos County', 'Costilla County' ],
  '81143': [ 'Custer County', 'Saguache County' ],
  '81144': [ 'Alamosa County', 'Conejos County', 'Rio Grande County' ],
  '81146': [
    'Alamosa County',
    'Costilla County',
    'Huerfano County',
    'Saguache County'
  ],
  '81147': [
    'Archuleta County',
    'Conejos County',
    'Hinsdale County',
    'La Plata County',
    'Mineral County',
    'Rio Grande County',
    'San Juan County'
  ],
  '81148': [ 'Conejos County' ],
  '81149': [ 'Mineral County', 'Saguache County' ],
  '81151': [ 'Alamosa County', 'Conejos County', 'Costilla County' ],
  '81152': [
    'Conejos County',
    'Costilla County',
    'Huerfano County',
    'Las Animas County'
  ],
  '81154': [
    'Archuleta County',
    'Conejos County',
    'Mineral County',
    'Rio Grande County'
  ],
  '81155': [
    'Chaffee County',
    'Custer County',
    'Fremont County',
    'Saguache County'
  ],
  '81201': [
    'Chaffee County',
    'Fremont County',
    'Gunnison County',
    'Park County',
    'Saguache County'
  ],
  '81210': [ 'Chaffee County', 'Gunnison County', 'Pitkin County' ],
  '81211': [
    'Chaffee County',
    'Gunnison County',
    'Lake County',
    'Park County',
    'Pitkin County'
  ],
  '81212': [ 'Custer County', 'Fremont County', 'Park County', 'Teller County' ],
  '81220': [
    'Gunnison County',
    'Hinsdale County',
    'Montrose County',
    'Ouray County'
  ],
  '81221': [ 'Fremont County' ],
  '81222': [ 'Fremont County', 'Saguache County' ],
  '81223': [ 'Custer County', 'Fremont County', 'Saguache County' ],
  '81224': [ 'Gunnison County', 'Pitkin County' ],
  '81225': [ 'Gunnison County', 'Pitkin County' ],
  '81226': [ 'Custer County', 'Fremont County' ],
  '81227': [ 'Chaffee County' ],
  '81230': [
    'Delta County',
    'Gunnison County',
    'Hinsdale County',
    'Mineral County',
    'Montrose County',
    'Saguache County'
  ],
  '81231': [ 'Gunnison County' ],
  '81232': [ 'Custer County', 'Fremont County' ],
  '81233': [ 'Fremont County', 'Saguache County' ],
  '81235': [
    'Gunnison County',
    'Hinsdale County',
    'Mineral County',
    'Ouray County',
    'Saguache County',
    'San Juan County'
  ],
  '81236': [ 'Chaffee County', 'Gunnison County' ],
  '81237': [ 'Gunnison County' ],
  '81239': [ 'Gunnison County', 'Saguache County' ],
  '81240': [
    'El Paso County',
    'Fremont County',
    'Pueblo County',
    'Teller County'
  ],
  '81241': [ 'Gunnison County' ],
  '81242': [ 'Chaffee County' ],
  '81243': [ 'Gunnison County', 'Hinsdale County', 'Saguache County' ],
  '81244': [ 'Fremont County' ],
  '81248': [ 'Chaffee County', 'Gunnison County', 'Saguache County' ],
  '81251': [ 'Chaffee County', 'Lake County', 'Pitkin County' ],
  '81252': [
    'Custer County',
    'Fremont County',
    'Huerfano County',
    'Saguache County'
  ],
  '81253': [ 'Custer County', 'Fremont County', 'Pueblo County' ],
  '81301': [
    'Dolores County',
    'La Plata County',
    'Montezuma County',
    'San Juan County',
    'San Miguel County'
  ],
  '81303': [ 'La Plata County' ],
  '81320': [ 'Dolores County', 'Montezuma County', 'San Miguel County' ],
  '81321': [ 'Montezuma County' ],
  '81323': [
    'Dolores County',
    'La Plata County',
    'Montezuma County',
    'San Juan County',
    'San Miguel County'
  ],
  '81324': [ 'Dolores County', 'Montezuma County', 'San Miguel County' ],
  '81325': [
    'Dolores County',
    'Montezuma County',
    'Montrose County',
    'San Miguel County'
  ],
  '81326': [ 'La Plata County', 'Montezuma County' ],
  '81327': [ 'Montezuma County' ],
  '81328': [ 'La Plata County', 'Montezuma County' ],
  '81330': [ 'Montezuma County' ],
  '81331': [ 'Dolores County', 'Montezuma County' ],
  '81332': [
    'Dolores County',
    'La Plata County',
    'Montezuma County',
    'San Juan County',
    'San Miguel County'
  ],
  '81334': [ 'La Plata County', 'Montezuma County' ],
  '81335': [ 'Montezuma County' ],
  '81401': [
    'Delta County',
    'Gunnison County',
    'Montrose County',
    'Ouray County'
  ],
  '81403': [
    'Gunnison County',
    'Montrose County',
    'Ouray County',
    'San Miguel County'
  ],
  '81410': [ 'Delta County' ],
  '81411': [ 'Montrose County', 'San Miguel County' ],
  '81413': [ 'Delta County', 'Mesa County' ],
  '81415': [ 'Delta County', 'Gunnison County', 'Montrose County' ],
  '81416': [ 'Delta County', 'Mesa County', 'Montrose County' ],
  '81418': [ 'Delta County' ],
  '81419': [ 'Delta County', 'Mesa County' ],
  '81422': [ 'Mesa County', 'Montrose County', 'San Miguel County' ],
  '81423': [ 'Dolores County', 'Montrose County', 'San Miguel County' ],
  '81424': [ 'Montrose County' ],
  '81425': [ 'Delta County', 'Mesa County', 'Montrose County' ],
  '81426': [ 'Dolores County', 'San Juan County', 'San Miguel County' ],
  '81427': [
    'Hinsdale County',
    'Ouray County',
    'San Juan County',
    'San Miguel County'
  ],
  '81428': [ 'Delta County', 'Gunnison County', 'Mesa County' ],
  '81429': [ 'Montrose County', 'San Miguel County' ],
  '81430': [
    'Dolores County',
    'Montrose County',
    'Ouray County',
    'San Miguel County'
  ],
  '81431': [ 'Montrose County', 'San Miguel County' ],
  '81432': [
    'Gunnison County',
    'Hinsdale County',
    'Montrose County',
    'Ouray County',
    'San Miguel County'
  ],
  '81433': [
    'Hinsdale County',
    'La Plata County',
    'Ouray County',
    'San Juan County',
    'San Miguel County'
  ],
  '81434': [ 'Delta County', 'Gunnison County', 'Mesa County', 'Pitkin County' ],
  '81435': [
    'Dolores County',
    'Ouray County',
    'San Juan County',
    'San Miguel County'
  ],
  '81501': [ 'Mesa County' ],
  '81503': [ 'Mesa County' ],
  '81504': [ 'Mesa County' ],
  '81505': [ 'Mesa County' ],
  '81506': [ 'Mesa County' ],
  '81507': [ 'Mesa County' ],
  '81520': [ 'Mesa County' ],
  '81521': [ 'Mesa County' ],
  '81522': [ 'Mesa County', 'Montrose County' ],
  '81523': [ 'Mesa County' ],
  '81524': [ 'Garfield County', 'Mesa County' ],
  '81525': [ 'Garfield County', 'Mesa County' ],
  '81526': [ 'Mesa County' ],
  '81527': [ 'Delta County', 'Mesa County', 'Montrose County' ],
  '81601': [ 'Eagle County', 'Garfield County', 'Pitkin County' ],
  '81610': [ 'Moffat County', 'Rio Blanco County' ],
  '81611': [
    'Chaffee County',
    'Gunnison County',
    'Lake County',
    'Pitkin County'
  ],
  '81612': [ 'Pitkin County' ],
  '81615': [ 'Pitkin County' ],
  '81620': [ 'Eagle County' ],
  '81621': [ 'Eagle County', 'Garfield County', 'Pitkin County' ],
  '81623': [
    'Eagle County',
    'Garfield County',
    'Gunnison County',
    'Mesa County',
    'Pitkin County'
  ],
  '81624': [
    'Delta County',
    'Garfield County',
    'Gunnison County',
    'Mesa County',
    'Pitkin County'
  ],
  '81625': [ 'Moffat County', 'Routt County' ],
  '81630': [ 'Garfield County', 'Mesa County', 'Rio Blanco County' ],
  '81631': [ 'Eagle County' ],
  '81632': [ 'Eagle County' ],
  '81633': [ 'Moffat County', 'Rio Blanco County' ],
  '81635': [ 'Garfield County', 'Mesa County', 'Rio Blanco County' ],
  '81637': [
    'Eagle County',
    'Garfield County',
    'Rio Blanco County',
    'Routt County'
  ],
  '81638': [ 'Moffat County', 'Rio Blanco County', 'Routt County' ],
  '81639': [ 'Moffat County', 'Rio Blanco County', 'Routt County' ],
  '81640': [ 'Moffat County', 'Rio Blanco County' ],
  '81641': [
    'Garfield County',
    'Moffat County',
    'Rio Blanco County',
    'Routt County'
  ],
  '81642': [ 'Eagle County', 'Lake County', 'Pitkin County' ],
  '81643': [ 'Delta County', 'Mesa County' ],
  '81645': [ 'Eagle County', 'Lake County', 'Pitkin County', 'Summit County' ],
  '81646': [ 'Delta County', 'Mesa County' ],
  '81647': [
    'Garfield County',
    'Mesa County',
    'Pitkin County',
    'Rio Blanco County'
  ],
  '81648': [ 'Garfield County', 'Moffat County', 'Rio Blanco County' ],
  '81649': [ 'Eagle County', 'Summit County' ],
  '81650': [ 'Garfield County', 'Mesa County', 'Rio Blanco County' ],
  '81652': [ 'Garfield County', 'Mesa County' ],
  '81653': [ 'Moffat County', 'Routt County' ],
  '81654': [ 'Gunnison County', 'Pitkin County' ],
  '81655': [ 'Eagle County', 'Summit County' ],
  '81656': [ 'Pitkin County' ],
  '81657': [ 'Eagle County', 'Summit County' ],
  '82063': [ 'Jackson County', 'Larimer County' ]
}
// 롤 API 키는 발급 시 24시간 사용가능
// const API_KEY = "RGAPI-7be927de-f6a2-4fd3-bab4-dd9da85b123c";

//서버 주소
const sever = "https://kmslolservice.cf";
// const sever = "https://13.125.252.81/";

// export interface IgetSummonerId {
//   id: string;
//   accountId: string;
//   puuid: string;
//   name: string;
//   profileIconId: number;
//   revisionDate: number;
//   summonerLevel: number;
// }

// interface ISummonerInfo {
//     leagueId: string,
//     queueType: string,
//     tier: string,
//     rank: string,
//     summonerId: string,
//     summonerName: string,
//     leaguePoints: number,
//     wins: number,
//     losses: number,
//     veteran: boolean,
//     inactive: boolean,
//     freshBlood: boolean,
//     hotStreak: boolean,
// }

// 입력한 소환사 이름으로 소환사계정 정보
export function getSummonerId(summonerName: string | null) {
  return fetch(
    `${sever}/search/riot-api/summonerAccount?summoner=${summonerName}`
  ).then((response) => response.json());
}

// 입력한 소환사 이름으로 소환사 정보
export function getSummonerData(summonerName: string | null) {
  return fetch(
    `${sever}/search/riot-api/summonerInfo?summoner=${summonerName}`
  ).then((response) => response.json());
}

// 입력한 소환사 이름으로 모스트3 챔피언 정보
export function getChampionMost(summonerName: string | null) {
  return fetch(`${sever}/search/mostChamp?summoner=${summonerName}`).then(
    (response) => response.json()
  );
}

// 입력한 소환사 이름으로 숙련도 탑3 챔피언 정보
export function getChampionMastery(summonerName: string | null) {
  return fetch(
    `${sever}/search/riot-api/championMastery?summoner=${summonerName}`
  ).then((response) => response.json());
}

// 입력한 소환사 이름으로 숙련도 탑3 챔피언 정보 갱신
export function getChampionMasteryRenewal(summonerName: string | null) {
  return fetch(
    `${sever}/search/riot-api/updateChampionMastery?summoner=${summonerName}`
  ).then((response) => {
    response.json();
    // console.log(response.json())
  });
}

// 입력한 소환사 이름으로 최근전적 정보
export function getRecentRecord(summonerName: string | null) {
  return fetch(
    `${sever}/search/riot-api/recentGame?summoner=${summonerName}`
  ).then((response) => response.json());
}

// 입력한 소환사 이름으로 최근전적 정보 갱신
export function getRecentRecordRenewal(summonerName: string | null) {
  return fetch(
    `${sever}/search/riot-api/updateRecentGame?summoner=${summonerName}`
  ).then((response) => response.json());
}

// 로테이션 무료 챔피언 리스트
export function getChampionRotation() {
  return fetch(`${sever}/search/riot-api/rotation`).then((response) =>
    response.json()
  );
}

// 챔피언 정보
export function getChampionName() {
  return fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json`
  ).then((response) => response.json());
}

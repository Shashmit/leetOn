const formatData = (data) => {
  const acSubmissionNum = data.matchedUser.submitStats.acSubmissionNum || [];
  const totalSubmissionNum =
    data.matchedUser.submitStats.totalSubmissionNum || [];
  const allQuestionsCount = data.allQuestionsCount || [];

  let sendData = {
    totalSolved: acSubmissionNum.length > 0 ? acSubmissionNum[0].count : 0,
    totalSubmissions: data.matchedUser.submitStats.totalSubmissionNum,
    totalQuestions:
      allQuestionsCount.length > 0 ? allQuestionsCount[0].count : 0,
    easySolved: acSubmissionNum.length > 1 ? acSubmissionNum[1].count : 0,
    totalEasy: allQuestionsCount.length > 1 ? allQuestionsCount[1].count : 0,
    mediumSolved: acSubmissionNum.length > 2 ? acSubmissionNum[2].count : 0,
    totalMedium: allQuestionsCount.length > 2 ? allQuestionsCount[2].count : 0,
    hardSolved: acSubmissionNum.length > 3 ? acSubmissionNum[3].count : 0,
    totalHard: allQuestionsCount.length > 3 ? allQuestionsCount[3].count : 0,
    ranking: data.matchedUser.profile.ranking || 0,
    contributionPoint: data.matchedUser.contributions
      ? data.matchedUser.contributions.points
      : 0,
    reputation: data.matchedUser.profile.reputation || 0,
    attendedContests: data.userContestRanking
      ? data.userContestRanking.attendedContestsCount
      : 0,
    rating: data.userContestRanking ? data.userContestRanking.rating : 0,
    globalRanking: data.userContestRanking
      ? data.userContestRanking.globalRanking
      : 0,
    topPercentage: data.userContestRanking
      ? data.userContestRanking.topPercentage
      : 0,
    realName: data.matchedUser.profile.realName || "",
    userAvatar: data.matchedUser.profile.userAvatar || "",
  };
  return sendData;
};

module.exports = formatData;

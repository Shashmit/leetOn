const query = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      profile {
        realName
        userAvatar
      }
      contributions{
        points
      }
      profile{
        reputation
        ranking
      }
      submitStats{
        acSubmissionNum{
          difficulty
          count
          submissions
        }
        totalSubmissionNum{
          difficulty
          count
          submissions
        }
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      topPercentage
    }
  }`;

module.exports = query;

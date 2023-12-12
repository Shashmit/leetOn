
const Bento = ({ dataSol }) => {

  return (
  <>
    <div> <h2>{dataSol.realName}</h2></div>
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-row max-md:flex-col gap-2">

          <div className="">
              <div className="bg-[#4da78b] p-2 rounded-lg shadow-md flex gap-2">
                <div className="flex">
                  <img src={dataSol.userAvatar} height={200} width={150} className="rounded-md"/>
                </div>
                <div>
                <div className="flex">
                  <label>Ranking</label>
                  <h2 id="ranking">{dataSol.ranking}</h2>
                </div>
                <div className="flex">
                  <label>Total Solved</label>
                  <h2>{dataSol.totalSolved}</h2>
                  
                </div>
                <div className="flex">
                  <label>Contribution Point</label>
                  <h2>{dataSol.contributionPoint}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="">
              <div className="bg-[#c3eb60] p-5 rounded-lg shadow-md">
                  <div className="flex">
                    <label>
                      Attended Contests
                    </label>
                    <h2>{dataSol.attendedContests}</h2>
                  </div>
                  <div className="flex">
                    <label>
                      Global Ranking
                    </label>
                    <h2>{dataSol.globalRanking}</h2>
                  </div>
                  <div className="flex">
                    <label>
                      Rating
                    </label>
                    <h2>{dataSol.rating}</h2>
                  </div>
                  <div className="flex">
                    <label>
                      Top Percentage
                    </label>
                    <h2>{dataSol.topPercentage}</h2>
                  </div>
              </div>
          </div>

        </div>
        <div className="flex gap-2">
          <div className="flex ">
                <div className="bg-[#f5d1ce] p-5 rounded-lg shadow-md">
                  <h2>Easy</h2>
                  <h2>{dataSol.easySolved}</h2>
                  <label>Out of</label>
                  <h2>{dataSol.totalHard}</h2>
                </div>
          </div>
          <div className="">
                <div className="bg-[#f6e7ce] p-5 rounded-lg shadow-md">
                  <h2>Medium</h2>
                  <h2>{dataSol.mediumSolved}</h2>
                  <label>Out of</label>
                  <h2>{dataSol.totalMedium}</h2>
                </div>
          </div>
          <div className="">
                <div className="bg-[#fafcd3] p-5 rounded-lg shadow-md">
                  <h2>Hard</h2>
                  <h2>{dataSol.hardSolved}</h2>
                  <label>Out of</label>
                  <h2>{dataSol.totalHard}</h2>
                </div>
          </div>
        </div>
    </div>
</>
  )
}

export default Bento;

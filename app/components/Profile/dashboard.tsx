"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart } from "./bar-chart"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1E1F45]">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#272856]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8787c5]" />
          <span className="text-white text-lg">Glarimy Wiz</span>
        </div>
        <span className="text-white">Dashboard</span>
      </nav>

      {/* Profile Section */}
      <section className="bg-[#CAC9FF] px-6 py-8">
        <div className="flex justify-between items-start max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-full" />
            <div>
              <h2 className="text-[#1E1F45] text-xl font-medium">User Name</h2>
              <p className="text-[#1E1F45]/70 mt-1">Welcome to your profile!</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-32 bg-[#272856] hover:bg-[#272856]/90 text-white">Logout</Button>
            <Button className="w-32 bg-white hover:bg-white/90 text-[#1E1F45]">Edit Profile</Button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats */}
        <section className="flex justify-between items-center text-white text-xl px-8 mb-16">
          <span>Total Quizzes</span>
          <span>25</span>
          <span>Total Score</span>
          <span>350</span>
        </section>



        {/* Progress Graph */}
        <section className="bg-[#272856] rounded-lg p-6 mb-12">
          <h2 className="text-white text-lg mb-6">Progress Graph</h2>
          <div className="space-y-6">
            {/* Dropdown Section with Score label on top */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-white text-sm">Score</span>
              <Select defaultValue="math">
                <SelectTrigger className="w-28 bg-[#CAC9FF] border-0 text-black">
                  <SelectValue>Math</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  <SelectItem value="math">Math</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bar Chart */}
            <div className="h-[300px]">
              <BarChart />
            </div>
          </div>
        </section>


        {/* Quiz History */}
        <section>
  <h2 className="text-white text-2xl mb-2">Quiz History</h2>
  <p className="text-white/60 mb-6">Review your past quizzes</p>

 
  <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 py-4">

    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-500 rounded-lg"></div>
          <div>
            <h3 className="text-[#1E1F45] text-lg font-medium">Math</h3>
            <p className="text-[#1E1F45]/60 leading-tight">Score: 180</p>
            <button className="text-[#1E1F45] hover:bg-[#CAC9FF] py-1 rounded block">
              Review
            </button>
          </div>
        </div>
        <span className="text-[#1E1F45]">Time: 20 mins</span>
      </div>
    </div>

    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-500 rounded-lg"></div>
          <div>
            <h3 className="text-[#1E1F45] text-lg font-medium">Chemistry</h3>
            <p className="text-[#1E1F45]/60 leading-tight">Score: 160</p>
            <button className="text-[#1E1F45] hover:bg-[#CAC9FF] py-1 rounded block">
              Review
            </button>
          </div>
        </div>
        <span className="text-[#1E1F45]">Time: 20 mins</span>
      </div>
    </div>

    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-500 rounded-lg"></div>
          <div>
            <h3 className="text-[#1E1F45] text-lg font-medium">Physics</h3>
            <p className="text-[#1E1F45]/60 leading-tight">Score: 170</p>
            <button className="text-[#1E1F45] hover:bg-[#CAC9FF] py-1 rounded block">
              Review
            </button>
          </div>
        </div>
        <span className="text-[#1E1F45]">Time: 22 mins</span>
      </div>
    </div>
  </div>
</section>


      </main>
    </div>
  )
}


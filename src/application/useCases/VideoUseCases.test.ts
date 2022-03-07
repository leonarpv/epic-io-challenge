//write units test to check BreedUseCases
import ApiVideoRepository from "../../infrastructure/repositories/ApiVideoRepository"
import { getVideoList } from "./VideoUseCases"

const api = new ApiVideoRepository()

describe("VideoUseCases", () => {
  it("should be defined", () => {
    expect(getVideoList).toBeDefined()
  })

  it("should return a list of videos", async () => {
    const result = await getVideoList(api)
    let expected = result.length
    expect(expected).toBeGreaterThan(0)
  })
})

import { expect } from "@jest/globals"
import { createUid } from "../../helpers/uidMap"

test('creates uids correctly', () => {
  const uidMap = {}
  let duplicates = false
  for (let i = 0; i < 2000; i++) {
    const uid = createUid()
    if (!uidMap[uid]) {
      uidMap[uid] = true
    } else {
      duplicates = true
    }
  }

  expect(duplicates).toBe(false)
  
})
import exercises1 from './exercises1.js'
import exercises2 from './exercises2.js'
import exercises3 from './exercises3.js'
import exercises4 from './exercises4.js'

const exercises = [...exercises1,
  ...exercises2,
  ...exercises3,
...exercises4]

export default exercises

export function getExercisesByLesson(lessonSlug) {
  return exercises.filter((ex) => ex.lessonSlug === lessonSlug)
}

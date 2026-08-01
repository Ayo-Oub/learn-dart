import exercises1 from './exercises1.js'
import exercises2 from './exercises2.js'
import exercises3 from './exercises3.js'
import exercises4 from './exercises4.js'
import exercises5 from './exercises5.js'
import exercises6 from './exercises6.js'
import exercises7 from './exercises7.js'
import exercises8 from './exercises8.js'
import exercises9 from './exercises9.js'
import exercises10 from './exercises10.js'

const exercises = [
  ...exercises1,
  ...exercises2,
  ...exercises3,
  ...exercises4,
  ...exercises5,
  ...exercises6,
  ...exercises7,
  ...exercises8,
  ...exercises9,
  ...exercises10,
]

export default exercises

export function getExercisesByLesson(lessonSlug) {
  return exercises.filter((ex) => ex.lessonSlug === lessonSlug)
}

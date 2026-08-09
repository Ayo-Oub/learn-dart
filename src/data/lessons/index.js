import lesson1 from './lesson1.js'
import lesson2 from './lesson2.js'
import lesson3 from './lesson3.js'
import lesson4 from './lesson4.js'
import lesson5 from './lesson5.js'
import lesson6 from './lesson6.js'
import lesson7 from './lesson7.js'
import lesson8 from './lesson8.js'
import lesson9 from './lesson9.js'
import lesson10 from './lesson10.js'
import lesson11 from './lesson11.js'

const lessons = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11
]

export default lessons

export function getLessonBySlug(slug) {
  return lessons.find((lesson) => lesson.slug === slug)
}

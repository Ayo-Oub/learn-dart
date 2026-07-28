import lesson1 from './lesson1.js'
import lesson2 from './lesson2.js'

const lessons = [lesson1, lesson2]

export default lessons

export function getLessonBySlug(slug) {
  return lessons.find((lesson) => lesson.slug === slug)
}

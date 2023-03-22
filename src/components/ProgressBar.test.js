import ProgressBar from './ProgressBar'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup() // Resets the DOM after each test suite
})

/* Tests for the ProgressBar component*/
describe('ProgressBar Component', ()=> {
  render(<ProgressBar progress={0} size='small' />)
  const progressbar = screen.getByTestId('progressbar')

  // Test that it renders
  test('ProgressBar rendering', () => {
    expect(progressbar).toBeInTheDocument()
  })

  test('ProgressBar has correct className', () => {
    expect(progressbar).toHaveClass('progress-bar small')
  })
})

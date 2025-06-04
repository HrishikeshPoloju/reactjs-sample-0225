import { render, screen, fireEvent } from '@testing-library/react';
import TaskPopup from '../TaskPopup.jsx';
import { vi } from 'vitest';

describe('TaskPopup Component', () => {
  const mockSetTaskText = vi.fn();
  const mockSetTaskDate = vi.fn();
  const mockOnAddTask = vi.fn();

  beforeEach(() => {
    render(
      <TaskPopup
        taskText=""
        setTaskText={mockSetTaskText}
        taskDate=""
        setTaskDate={mockSetTaskDate}
        onAddTask={mockOnAddTask}
      />
    );
  });

  it('renders all form elements', () => {
    expect(screen.getByPlaceholderText('Enter Task')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument(); // Date input
    expect(screen.getByRole('button', { name: 'Add Task' })).toBeInTheDocument();
  });

  it('updates task text on input change', () => {
    const input = screen.getByPlaceholderText('Enter Task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(mockSetTaskText).toHaveBeenCalledWith('New Task');
  });


  it('calls onAddTask when button clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }));
    expect(mockOnAddTask).toHaveBeenCalled();
  });
});
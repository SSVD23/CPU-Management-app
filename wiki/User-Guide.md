# User Guide

This guide explains how to use the CPU Management App's features.

## Table of Contents
1. [CPU List View](#cpu-list-view)
2. [Searching CPUs](#searching-cpus)
3. [Sorting CPUs](#sorting-cpus)
4. [Editing CPU Details](#editing-cpu-details)

## CPU List View

The main page displays a list of all CPUs in a table format showing:
- Brand
- Model
- Socket

### Features:
- Click any row to view/edit CPU details
- Search functionality
- Sortable columns
- Responsive design

## Searching CPUs

The search bar at the top of the CPU list allows you to filter CPUs:

1. Type any text to search through:
   - Brand names
   - Model numbers
   - Socket types

2. The list updates in real-time as you type
3. Search is case-insensitive
4. Clear the search box to show all CPUs again

## Sorting CPUs

You can sort the CPU list by any column:

1. Click a column header to sort by that field
2. Click again to reverse the sort order
3. Sort indicators (↑↓) show the current sort field and direction

Sortable columns:
- Brand
- Model
- Socket

## Editing CPU Details

To edit a CPU's details:

1. Click any CPU in the list to open the edit modal
2. Modify any of these fields:
   - Brand
   - Model
   - Socket (select from dropdown)
   - Clock Speed (GHz)
   - Number of Cores
   - Number of Threads
   - TDP (Watts)
   - Price (EUR)

### Validation Rules:
- All fields are required
- Clock Speed must be positive
- Cores and Threads must be at least 1
- TDP must be positive
- Price must be positive

### Saving Changes:
1. Click "Save" to update the CPU
2. Click "Cancel" to discard changes
3. A loading indicator shows while saving

## Tips and Tricks

1. **Quick Search**: Use the search bar to quickly find specific CPUs
2. **Multi-criteria Search**: Search works across all visible fields
3. **Sort + Search**: Combine sorting and searching to find exactly what you need
4. **Form Validation**: The edit form prevents invalid data entry
5. **Real-time Updates**: Changes appear immediately in the list

## Keyboard Shortcuts

- `Enter` in search: Refines the search
- `Esc` in edit modal: Closes the modal
- `Enter` in edit form: Submits the form

## Getting Help

If you encounter any issues:
1. Check the [Installation Guide](./Installation.md) for setup problems
2. Review the [API Documentation](./API-Documentation.md) for data format details
3. Create an issue on GitHub for bug reports 
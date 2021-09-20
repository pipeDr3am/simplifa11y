## [0.0.5-rc.1] - 2021-09-15
### Added
- zIndex added for calendar to solve absolute positioning issues on parent apps
- width added for calendar
- dateRange added for minimum and maximum dates
- custom theme mods available for single parameter updates to defaultTheme
- theme parameter 'none' available for using plain css 
- padding param added to dateInput and inputHint
- width param added to dateInput

## [0.0.5-rc.0] - 2021-09-15
### Fixed
- backgroundColor changed to background for Calendar solid bg

## [0.0.4] - 2021-09-15
### Added
- backgroundColor param added to defaultTheme

## [0.0.3] - 2021-09-15
### Removed
- removed @axe-core from packages

## [0.0.1] - 2021-09-15
### Added
- theming added for core date text and backgrounds

### Changed
- removed all css in favor of styled-components

### Removed
- lodash removed

### Fixed
- selecting date no longer selects previous date (local timezone / format fix)
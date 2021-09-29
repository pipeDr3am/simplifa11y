## [0.0.6-rc.7] - 2021-09-29
### Added
- inputId param added to override default date input text id
- on receiving a full date, input box now fires set dateString method up component
  - calls `onInvalidDate` error up if invalid dateRange

### Fixed
- calendar icon button type set to 'button' to prevent form submitions via formik
- removed year / month arrow button backgrounds and borders
- input <enter> will skip format and validation check if character length is not 14, will instead call the error callback
- invalid date input check will skip format if character length is not 14
- valid date checks on every keystroke fire errors up to parent
- hitting enter after only entering partial date input will no longer throw error

### Changed
- added better support for screen-readers, structure updates and tabbing control
  - added aria-label 'toggle calendar' to calendar icon 
  - calendar icon changed from li to div to optimize what screen reader announces
  - added aria-describedby for date input pointing to inputHint
  - added aria-label for inputHint as `format is ${inputHint}`

### Security
- security updates

## [0.0.5] - 2021-09-20
### Added
- onInvalidDate callback sends out {message, details: { dateRange, dateInput }}
- date validation on input enter (date range check)

### Changed
- dateRange no longer required, when left out year limits are 0000 and 9999

## [0.0.5-rc.3] - 2021-09-20
### Added
- outline param added for global wrap
- outlineHover param added for global wrap
- dateRange min and max constrains left & right month & year functionality

## [0.0.5-rc.2] - 2021-09-20
### Fixed
- dateRange year working and selects max year passed in

## [0.0.5-rc.1] - 2021-09-19
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
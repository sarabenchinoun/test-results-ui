# User Story

**AS A** Platform User
**I WANT** to view detailed laboratory results for a service user
**SO THAT** I can provide appropriate information and care when handling a service user's results

# Acceptance Criteria

- AC-001
  - **GIVEN**: A user is accessing the Screen Details page
  - **WHEN**: The screen details are loading
  - **THEN**: A loading container is displayed to the user
- AC-002
  - **GIVEN**: A user is on the Screen Details page
  - **WHEN**: An invalid screen reference is provided
  - **THEN**: Display a screen not found message
- AC-003
  - **GIVEN**: A user is on the Screen Details page
  - **WHEN**: A valid screen reference is provided
  - **THEN**: Display all relevant information to the user as per the designs
- AC-004
  - **GIVEN**: A user is on the Screen Details page
  - **WHEN**: A valid screen reference is provided AND an error is thrown
  - **THEN**: Display an error message to the user
- AC-005
  - **GIVEN**: A user is on the Screen Details page
  - **WHEN**: Viewing date related values
  - **THEN**: Display them in the format of `DD MMM YYYY`

# Useful Information

- Use the `getById` function in the `api.ts` file
  - Function only returns data for screen references `SR8704928`, `SR870434897` and `SR835434098`
  - All other code screen references will resolve with a `404` status code and return no `data` object
  - **Reminder**: The directory for this can be moved but the underlying content should not be modified
- Errors are randomly returned when calling the `getById` function
  - These errors will be resolved with a `500` status code and return no `data` object

# Styles

## Semantic Colours

### Default

- **Negative Colours**: #FEF1F1
  - **Font Colour**: #BA1C1C
- **Positive Colours**: #F2FDF5
  - **Font Colour**: #157F3C
- **Warning Colours**: #FEFCE7
  - **Font Colour**: #A26107
- **Informative Colours**: #F0F9FF
  - **Font Colour**: #0369A0

### Solid

- **Negative Colours**: #BA1C1C
  - **Font Colour**: #FEF1F1
- **Positive Colours**: #157F3C
  - **Font Colour**: #F2FDF5
- **Warning Colours**: #A26107
  - **Font Colour**: #FEFCE7
- **Informative Colours**: #0369A0
  - **Font Colour**: #F0F9FF

## Text

- **Base Colour**: #000000
- **White Colour**: #FFFFFF

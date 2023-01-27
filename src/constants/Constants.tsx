export const CODE = {
    OK_CODE: 200,
    CREATED: 201,
    BAD_REQUEST_CODE: 400,
    UNAUTHORIZED_CODE: 401,
    VALIDATION_CODE: 422,
    NO_CONTENT: 204,
    INTERNAL_SERVER_ERROR: 500
}
export const VALIDATION_MESSAGE = {
    CATCH_ERROR: "Something went wrong. Please try again.",

    NO_SPACE_ALLOWED: "No space allowed.",    
    EMAIL_REQUIRED: "Enter email address.",
    VALID_EMAIL: "Please enter a valid email address.",  
    ROLL_NAME_REQUIRED: "Enter roll name.", 
    ROLL_NAME_MAX: "roll name must be at most 25 characters",
    ROLL_NAME_VALID: "The roll name must contain alpha characters only.",
    ROLE_ID_REQUIRED: "Please choose a roles.",
    TITLE_REQUIRED: "Enter ambience title.", 
    TITLE_MAX: "Title must be at most 25 characters",
    TITLE_VALID: "The title must contain alpha & numeric characters only.",
    FILE_REQUIRED: "Please choose a audio file & accept only mp3.", 
    ICON_REQUIRED: "Please choose a icon & accept only jpeg png jpg files.", 
    FULL_NAME_REQUIRED: "Enter full name.",
    FULL_NAME_MAX: "Full name must be at most 36 characters",
    FULL_NAME_VALID: "The full name must contain alpha characters only.",
    LAST_NAME_REQUIRED: "Enter last name.",
    LAST_NAME_MAX: "Last name must be at most 25 characters",
    LAST_NAME_VALID: "The last name must contain alpha characters only.",
    COMPANY_NAME_REQUIRED: "Enter company name.",
    COMPANY_NAME_VALID: "The company name must contain alpha characters only.",
    COMPANY_NAME_MAX: "Company name must be at most 25 characters",

    COUNTRY_CODE_REQUIRED: "Enter country code.",
    MOBILE_NUMBER_REQUIRED: "Enter mobile number.",
    PHONE_NUMBER_VALID: "Please enter a valid mobile number.",
    MOBILE_NUMBER_DIGIT: "Mobile number must be 10 digit.",
    MOBILE_NUMBER_MIN: "Mobile number must be between 9 to 16 digit.",
    MOBILE_NUMBER_MAX: "Mobile number must be between 9 to 16 digit.",
    PAN_CARD_NUMBER_REQUIRED: "Enter Pan card number.",
    DRUG_LICENSE_REQUIRED: "Select Drug License.",
    PAN_CARD_NUMBER_VALID: "Please enter a valid Pan Card Number.",
    GST_NUMBER_REQUIRED: "Enter GST number.",
    GST_NUMBER_VALID: "Please enter a valid GST Number.",
    TERMS_CONDITIONS_REQUIRED: "Terms & Conditions is required.",

    PASSWORD_VALID: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    PASSWORD_UPPER_CASE: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    PASSWORD_SPECIAL_CASE: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    PASSWORD_NUMBER_CASE: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    
    PASSWORD_REQUIRED: "Enter password.",
    PASSWORD_MIN_CHAR: "Password must have at least 8 characters.",
    PASSWORD_MAX_CHAR: "Password must be at most 16 characters",    
    
    CONFIRM_PASSWORD_REQUIRED: "Re-enter password.",   
    CONFIRM_PASSWORD_MIN_CHAR: "Confirm password must have at least 8 characters.",
    CONFIRM_PASSWORD_MAX_CHAR: "Confirm password must be at most 16 characters",

    OLD_PASSWORD_REQUIRED: "Enter old password.",
    OLD_PASSWORD_MIN_CHAR: "Old password must have at least 8 characters.",
    OLD_PASSWORD_MAX_CHAR: "Old password must be at most 16 characters.",

    NEW_PASSWORD_REQUIRED: "Enter new password.",
    NEW_PASSWORD_MIN_CHAR: "New password must have at least 8 characters.",
    NEW_PASSWORD_MAX_CHAR: "New password must be at most 16 characters.",

    CONFIRM_NEW_PASSWORD_REQUIRED: "Enter confirm password.",
    CONFIRM_NEW_PASSWORD_MIN_CHAR: "Re-enter password must have at least 8 characters.",
    CONFIRM_NEW_PASSWORD_MAX_CHAR: "Re-enter password must be at most 16 characters.",
    PASSWORD_CPWD_NOT_MATCHED: "Password doesn't match.",
    PASSWORD_OLD_NOT_SAME: "Old password and new password should not be same",

    ADDRESS_NAME_REQUIRED: "Enter Name.",
    ADDRESS_NAME_MAX: "Name must be at most 25 characters",
    ADDRESS_NAME_VALID: "The name must contain alpha characters only.",
    ADDRESS_COMPANY_NAME_REQUIRED: "Enter Company Name.",
    ADDRESS_SHOP_NUMBER_REQUIRED: "Enter Shop Number.",
    ADDRESS_BUILDING_NAME_REQUIRED: "Enter Building Name.",
    ADDRESS_STREET_NUMBER_REQUIRED: "Enter Street Number.",
    ADDRESS_ADDRESS_LINE_ONE_REQUIRED: "Enter Address Line - 1.",
    ADDRESS_ADDRESS_LINE_TWO_REQUIRED: "Enter Address Line - 2.",
    ADDRESS_STATE_REQUIRED: "Enter State.",
    ADDRESS_TOWN_CITY_DISTRICT_REQUIRED: "Enter Town / City / District.",
    ADDRESS_PIN_CODE_REQUIRED: "Enter Pin Code.",
    ADDRESS_PIN_CODE_VALID: "Please enter a valid pin code.",
    ADDRESS_PIN_CODE_DIGIT: "Pin code must be 6 digit.",
    ADDRESS_PIN_CODE_MIN: "Pin code must be at least 6 digit.",
    ADDRESS_PIN_CODE_MAX: "Pin code must be at most 6 digit.",

    ADDRESS_DELETE_TITLE: "Are you sure?",
    ADDRESS_DELETE_TEXT: "Are you sure you want to delete this item?",

    REMOVE_PROFILE_IMAGE: "Are you sure you want to remove profile?",

    DOCUMEMNT_UNSUPPORTED: "Unsupported file format.",
    USER_UNSUPPORTED: "Unsupported file format.",

    LOGOUT_MODEL_TITLE: "Are you sure?",
    LOGOUT_MODEL_TEXT: "Are you sure you want to logout?",

    ANY_CHOOSE:"Choose",
    ANY_SELECT:"Please select a ",
    ANY_REQUIRED: "Enter ",
    ANY_MAX: " must be at most 25 characters",
    ANY_VALID: " must contain alpha characters only.",

    ARE_YOU_SURE: "Are you sure?",
    ARE_YOU_DELETE_ANY: "You want to delete this ",
    ARE_YOU_VERIFY_EMAIL: "Are you sure you want to verify email for this user?",

    ARE_YOU_CONVERT_ANY:"You intend to change the "

}
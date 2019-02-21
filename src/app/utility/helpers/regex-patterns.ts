export class RegexPatterns {

  sort_code           = '[0-9]{2}-[0-9]{2}-[0-9]{2}';
  bank_account_number = '[0-9]{8}';
  company_number      = '[0-9]{8}';
  vat_reg_number      = 'GB [0-9]{9}';
  uk_post_code        = '^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$';
  phone_number        = '0[0-9]{10}';
  percentage          = '[0-9]{1,3}?(\\.[0-9][0-9]?)?';
  email               = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  only_whole_numbers  = '^(0|[1-9][0-9]*)$';
  contract_code       = '[a-zA-Z]{3}[0-9]{3}';
}

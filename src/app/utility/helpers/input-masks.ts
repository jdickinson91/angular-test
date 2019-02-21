import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export class InputMasks {

  phone_number        = [/0/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  sort_code           = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  bank_account_number = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  vat_reg_number      = ['G', 'B', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  company_number      = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  percentage           = createNumberMask({
    prefix: '',
    allowDecimal: true,
    decimalLimit: 2,
    integerLimit: 3
  });

}

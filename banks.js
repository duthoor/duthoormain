import { prismaInstance } from '../src/lib/prisma-instance.js';

export const banks = [
  {
    id: 1,
    name: 'Bank AlBilad',
    logo: 'https://ibsintelligence.com/wp-content/uploads/2023/06/Bank-Albilad.jpg',
    shortDescription:
      'Bank AlBilad is a Saudi Arabian joint stock company providing retail, corporate and investment banking services.',
    email: 'customerservice@bankalbilad.com',
    phone: '+966 92000 2000',
  },
  {
    id: 2,
    name: 'AlRajhi Bank',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQH5ZlEPd6EEkQ/company-logo_200_200/company-logo_200_200/0/1634619884850?e=2147483647&v=beta&t=vIAEuKgNuwnG5pPEgZuLLtBl7YQwii7-Tl6E0nM-IQI',
    shortDescription:
      'AlRajhi Bank is one of the largest Islamic banks in the world with a significant presence in Saudi Arabia.',
    email: 'customerservice@alrajhibank.com',
    phone: '+966 92000 5757',
  },
  {
    id: 3,
    name: 'Saudi National Bank',
    logo: 'https://forbesme-prestaging-media.s3.us-east-2.amazonaws.com/lists/uploads/2023/03/07061133/snb-1.jpg',
    shortDescription:
      'Saudi National Bank, previously known as National Commercial Bank, is the first Saudi Arabian bank and the largest in the Kingdom.',
    email: 'customerservice@snb.com',
    phone: '+966 92000 1000',
  },
  {
    id: 4,
    name: 'Saudi Awwal Bank',
    logo: 'https://giraffy.com/storage/images/brands/DiL7rk6pK29z9PTFsKwkLjYlqh71yjqRB3F5Vwmi.png',
    shortDescription:
      'Saudi Awwal Bank is a leading financial institution in Saudi Arabia offering a range of personal and business banking services.',
    email: 'customerservice@saudiawwalbank.com',
    phone: '+966 92000 4000',
  },
  {
    id: 5,
    name: 'Alinma Bank',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMG6bLfbrSXvyREzrAaouyxUNcTAVEfiw9A&s',
    shortDescription:
      'Alinma Bank is a Saudi joint stock company providing a variety of banking services in accordance with Islamic jurisprudence.',
    email: 'customerservice@alinma.com',
    phone: '+966 92000 5000',
  },
  {
    id: 6,
    name: 'Arab National Bank',
    logo: 'https://m.eyeofriyadh.com/directory/images/2022/10/38213ddf6f9a.jpg',
    shortDescription:
      'Arab National Bank is a major bank based in Riyadh, Saudi Arabia and offers a comprehensive range of commercial and personal services.',
    email: 'customerservice@anb.com',
    phone: '+966 92000 6000',
  },
  {
    id: 7,
    name: 'Riyad Bank',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQH1bIzXBvFAig/company-logo_200_200/company-logo_200_200/0/1664472539367/riyad_bank_logo?e=2147483647&v=beta&t=SG-iquxNEkEUVoZOJUATg8YLDnZvh4J88wlC3ClWa-U',
    shortDescription:
      'Riyad Bank is one of the largest financial institutions in Saudi Arabia, with a strong and growing corporate and retail banking franchise.',
    email: 'customerservice@riyadbank.com',
    phone: '+966 92000 7000',
  },
  {
    id: 8,
    name: 'Saudi Investement Bank',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGgdQ2b7K1imA/company-logo_200_200/company-logo_200_200/0/1664440716225/saudi_investment_bank_logo?e=2147483647&v=beta&t=a71-yzQuvuVDiUQAruGlH2lW_21wFS3vuJpQDoLqX84',
    shortDescription:
      'Saudi Investment Bank is a Saudi Arabian joint stock company providing wholesale, retail and commercial banking services.',
    email: 'customerservice@saib.com',
    phone: '+966 92000 8000',
  },
  {
    id: 9,
    name: 'Bank AlJazira',
    logo: 'https://mgmt.manhom.com/images/4494/1730119781/%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9.jpg',
    shortDescription:
      "Bank AlJazira is a Saudi Arabia based bank providing banking and financial services according to Islamic Shari'ah principles.",
    email: 'customerservice@baj.com',
    phone: '+966 92000 9000',
  },
];

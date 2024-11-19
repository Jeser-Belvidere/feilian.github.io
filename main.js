const userLang = navigator.language || navigator.userLanguage;
const zhRegExp = /zh/;
const enRegExp = /en/;

const isChineseUserLang = zhRegExp.test(userLang);
const isEnglishUserLang = enRegExp.test(userLang);

const engDictionary = {
  //NAVIGATION
  home_nav: "Home",
  about_nav: "About us",
  products_nav: "Products",
  contacts_nav: "Contacts",
  contacts_nav_footer: "Contacts",
  products_nav_footer: "Products",
  home_nav_footer: "Home",
  about_nav_footer: "About us",
  //HOME
  home_text1:
    "Feilian Company Limited was established in 2022 and already <br /> has rich experience in the import <br /> and export of goods.",
  //ABOUT
  about_title: "The best suppliers for you",
  about_text1: `FEILIAN COMPANY LIMITED was founded in 2022 and already has extensive
          experience in exporting and importing goods. <br /> The annual volume of
          imports and exports exceeds $20,000,000. We have close relationship
          with large and medium-sized trading companies, manufacturers,
          factories and large chain supermarkets in the CIS countries. Our
          suppliers and customers are located throughout Central Asia, China,
          UAE and other countries and regions.`,
  about_text2:
    "Years of perseverance and advocacy make us more professional! <br /> The company's priority is the fulfillment of our obligations!",
  about_text3: `FEILIAN COMPANY LIMITED has been helping clients with one common goal
          — finding the best options that fit our customers’ profile perfectly.
          We enable our customers to stay focused on their business by creating
          and managing solutions which solve their supply chain challenges in
          complex environment. During the searching for a product, we take into
          account the following main requirements: high-quality product,
          reasonable price, accurate delivery times and the best customer
          service.`,
  about_text4: `The company has extensive experience working with professional
          procurement staff, years of experience in trade exchange, as well as
          understanding the needs of CIS and Asia countries. Moreover FEILIAN
          COMPANY LIMITED has a high reputation and influence in the industry.`,
  volume_description: "The annual import and export volume exceeds",
  //PRODUCTS
  product_title: "Products",
  product_electronics: "Electronics",
  product_equipment: "Equipment",
  product_shoes: "Shoes",
  product_socks: "Socks",
  product_suitcases: "Suitcases",
  product_flowers: "Artificial flowers",
  product_mother_child: "Mother and child products",
  product_aluminum: "Aluminum",
  product_furniture: "Furniture",
  product_lamp: "Lamp",
  product_accessorizes: "Accessorizes",
  product_swimming: "Goods for swimming",
  product_chemical: "Chemical goods",
  product_nickel: "Nickel plate",
  product_lumber: "Lumber",
  //CONTACTS
  contacts_title: "Contacts",
  address: "Address:",
  email: "Email:",
  language_btn: "简体中文 Chinese",
  read_more_btn: "Read more",
  language_btn_footer: "简体中文 Chinese",
};

const cnDictionary = {
  //NAVIGATION
  home_nav: "首页",
  about_nav: "关于我们",
  contacts_nav: "商品列表",
  products_nav: "联系方式",
  contacts_nav_footer: "商品列表",
  products_nav_footer: "联系方式",
  home_nav_footer: "首页",
  about_nav_footer: "关于我们",
  home_text1: "成立于2022年, 已经拥有了丰富的货物进出口经验",
  //ABOUT
  about_title: "为您提供最好的供应商!",
  about_text1:
    "FEILIAN COMPANY LIMITED成立于2022年, 有着丰富的商品进出口经验。我们公司的年进出口总额超过2000万美元。我们与独联体国家的大中型贸易公司、制造商、工厂和大型连锁超市有着密切的关系。我们的供应商和客户遍布中亚、中国、阿联酋和其他国家和地区。",
  about_text2:
    "多年的坚持和倡导使我们更加专业! 公司的首要任务是履行我们的义务!",
  about_text3:
    "FEILIAN COMPANY LIMITED一直在帮助客户实现一个共同的目标——找到最好、最适合客户个人资料的选项。我们通过创建和管理解决方案来解决复杂环境中的供应链挑战, 使客户能够专注于自己的业务。在寻找产品的过程中，我们考虑了以下主要要求：高质量的产品、合理的价格、准确的交货时间和最好的客户服务。",
  about_text4:
    "我们公司拥有丰富的业内经验，包括：与专业采购人员合作、多年的贸易交流、以及了解独联体和亚洲国家需求。此外，我们在行业内享有很高的声誉和影响力。",
  volume_description: "年进出口总额超过",
  //PRODUCTS
  product_title: "商品列表",
  product_electronics: "电子产品",
  product_equipment: "设备",
  product_shoes: "鞋子",
  product_socks: "袜子",
  product_suitcases: "手提箱",
  product_flowers: "人造花",
  product_mother_child: "母婴用品",
  product_aluminum: "铝材",
  product_furniture: "家具",
  product_lamp: "灯具",
  product_accessorizes: "发饰",
  product_swimming: "游泳用品",
  product_chemical: "化工产品",
  product_nickel: "镍板",
  product_lumber: "木料",
  //CONTACTS
  contacts_title: "联系方式",
  address: "地址:",
  email: "电子邮件:",
  language_btn: "英语 English",
  read_more_btn: "更多",
  language_btn_footer: "英语 English",
};

// zn | en
let currentLang = "en";

const onLanguageChange = (e) => {
  if (currentLang === "zn") {
    for (let key of Object.keys(engDictionary)) {
      document.getElementById(key).innerHTML = engDictionary[key];
    }
    currentLang = "en";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return;
  }

  if (currentLang === "en") {
    for (let key of Object.keys(cnDictionary)) {
      document.getElementById(key).innerHTML = cnDictionary[key];
    }
    currentLang = "zn";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return;
  }
};

if (isChineseUserLang) {
  currentLang = "zn";
  onLanguageChange();
} else if (isEnglishUserLang) {
  currentLang = "en";
} else {
  currentLang = "en";
}

document
  .getElementById("language_btn")
  .addEventListener("click", (e) => onLanguageChange(e));
document
  .getElementById("language_btn_footer")
  .addEventListener("click", (e) => onLanguageChange(e));

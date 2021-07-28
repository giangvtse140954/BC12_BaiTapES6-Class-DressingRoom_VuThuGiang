let topClothTab = document.querySelector('#top-cloth');
let bottomClothTab = document.querySelector('#bottom-cloth');
let shoesTab = document.querySelector('#shoes');
let handBagTab = document.querySelector('#handbag');
let necklaceTab = document.querySelector('#necklace');
let hairTab = document.querySelector('#hairstyle');
let backgroundTab = document.querySelector('#background');
let itemService = new ItemService();

//clear style of all tab
const clearTabStyle = () => {
  var listBackground = document.querySelectorAll('.tab-item');
  listBackground.forEach((item) => (item.style.backgroundColor = 'white'));
  var listColor = document.querySelectorAll('.tab-item a');
  listColor.forEach((item) => (item.style.color = '#04a8dfbe'));
};

//getAllItems

// const getItems = async () => {
//   try {
//     let result = await itemService.getAllItems();
//     return result.data;
//   } catch (error) {
//     console.log(error);
// }

//  itemService
// .getAllItems()
// .then((result) => {
//   console.log(result.data);
//   return result.data;
// })
// .catch((error) => {
//     console.log(error);
// });
// };

const getListItemByType = (typeName, insideCloth) => {
  let content = '';
  itemService
    .getAllItems()
    .then((result) => {
      result.data.map((item, index) => {
        if (item.type == typeName) {
          content += `
                <div class="col-3>
                <div class="card item-card" style="width:12rem;margin-left:40px;margin-top:30px">
                  <img src="${item.imgSrc_jpg}" class="card-img-top" alt="topCloth">
                  <div class="card-body item-content">
                    <h6 class="card-title">${item.name}</h6>
                    <a href="#" class="btn btn-primary" style="width:150px" onclick="thuDo(event, '${item.imgSrc_png}', '${item.type}', '${insideCloth}')">Thử đồ</a>
                  </div>
                </div>
              </div>
                  `;
        }
      });
      console.log(content);
      document.querySelector('#itemList').innerHTML = content;
    })
    .catch((error) => console.log(error));
};
function thuDo(e, src, type, insideCloth) {
  e.preventDefault();
  document.querySelector(`.${insideCloth}`).style.display = 'none';
  document.querySelector(`.${type}`).style.display = 'block';
  document.querySelector(`.${type}__img`).src = src;
}
// Press tab áo
topClothTab.onclick = function () {
  clearTabStyle();
  topClothTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#top-cloth a').style.color = 'white';
  getListItemByType('topclothes', 'bikinitop');
};

//Press tab quần

bottomClothTab.onclick = function () {
  clearTabStyle();
  bottomClothTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#bottom-cloth a').style.color = 'white';
  getListItemByType('botclothes', 'bikinibottom');
};

//Press tab giày
shoesTab.onclick = function () {
  clearTabStyle();
  shoesTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#shoes a').style.color = 'white';
  getListItemByType('shoes', 'feet');
};

//Press tab túi xách
handBagTab.onclick = function () {
  clearTabStyle();
  handBagTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#handbag a').style.color = 'white';
  getListItemByType('handbags', 'handbag');
};

//Press tab dây chuyền
necklaceTab.onclick = function () {
  clearTabStyle();
  necklaceTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#necklace a').style.color = 'white';
  getListItemByType('necklaces', 'necklace');
};
//Press tab tóc
hairTab.onclick = function () {
  clearTabStyle();
  hairTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#hairstyle a').style.color = 'white';
  getListItemByType('hairstyle', 'hairstyles');
};
//Press tab hình nền
backgroundTab.onclick = function () {
  clearTabStyle();
  backgroundTab.style.backgroundColor = '#04a8dfbe';
  document.querySelector('#background a').style.color = 'white';
  getListItemByType('background', 'backgrounds');
};

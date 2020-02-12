/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    seconds = 1000;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, seconds);
    });
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
    req.responseType = 'json';
    req.addEventListener('load', function() {

    })
  })
}

export {
    delayPromise,
    loadAndSortTowns
};

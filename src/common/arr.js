export default {
  install(Vue, options) {
    //数组去重方法
    //v 是传入进来的数组  i是要去重的依据字段
    Vue.prototype.$changeArr = function(v, i) {
      let obj = {};
      let arr1 = v;
      let type = i;
      // arr1[0][type]
      arr1 = arr1.reduce((cur, next) => {
        let item = next[type];
        obj[item] ? "" : (obj[item] = true && cur.push(next));
        return cur;
      }, []);
      return arr1;
    };
    Vue.prototype.$Arrup = function(j, k) {
      let arr = j;
      let index = k;
      arr = arr.sort((a, b) => {
        return a[index] - b[index];
      });
      return arr;
    };
    Vue.prototype.$Arrdown = function(m, n) {
      let arr = m;
      let index = n;
      arr = arr.sort((a, b) => {
        return b[index] - a[index];
      });
      return arr;
    };
    Vue.prototype.$ksort = function(inputArr, sort_flags) {
      var tmp_arr = {},
        keys = [],
        sorter,
        i,
        k,
        that = this,
        strictForIn = false,
        populateArr = {};

      switch (sort_flags) {
        case "SORT_STRING":
          // compare items as strings
          sorter = function(a, b) {
            return that.strnatcmp(a, b);
          };
          break;
        case "SORT_LOCALE_STRING":
          // compare items as strings, original by the current locale (set with  i18n_loc_set_default() as of PHP6)
          var loc = this.i18n_loc_get_default();
          sorter = this.php_js.i18nLocales[loc].sorting;
          break;
        case "SORT_NUMERIC":
          // compare items numerically
          sorter = function(a, b) {
            return a + 0 - (b + 0);
          };
          break;
        // case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
          sorter = function(a, b) {
            var aFloat = parseFloat(a),
              bFloat = parseFloat(b),
              aNumeric = aFloat + "" === a,
              bNumeric = bFloat + "" === b;
            if (aNumeric && bNumeric) {
              return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
            } else if (aNumeric && !bNumeric) {
              return 1;
            } else if (!aNumeric && bNumeric) {
              return -1;
            }
            return a > b ? 1 : a < b ? -1 : 0;
          };
          break;
      }

      // Make a list of key names
      for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      keys.sort(sorter);

      // BEGIN REDUNDANT
      this.php_js = this.php_js || {};
      this.php_js.ini = this.php_js.ini || {};
      // END REDUNDANT
      strictForIn =
        this.php_js.ini["phpjs.strictForIn"] &&
        this.php_js.ini["phpjs.strictForIn"].local_value &&
        this.php_js.ini["phpjs.strictForIn"].local_value !== "off";
      populateArr = strictForIn ? inputArr : populateArr;

      // Rebuild array with sorted key names
      for (i = 0; i < keys.length; i++) {
        k = keys[i];
        tmp_arr[k] = inputArr[k];
        if (strictForIn) {
          delete inputArr[k];
        }
      }
      for (i in tmp_arr) {
        if (tmp_arr.hasOwnProperty(i)) {
          populateArr[i] = tmp_arr[i];
        }
      }

      return strictForIn || populateArr;
    };
  }
};

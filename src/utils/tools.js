export function getSortedTable(table) {
    const tableForSort = [...table]
    tableForSort.sort(compare)

}

function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }


export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  let reversed3: number[] = [];
  for (let i = collection_3.length - 1; i >= 0; i--) {
    reversed3.push(collection_3[i]);
  }

  let merged12: number[] = [];
  let i = 0, j = 0;
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      merged12.push(collection_1[i]);
      i++;
    } else {
      merged12.push(collection_2[j]);
      j++;
    }
  }
  
  while (i < collection_1.length) merged12.push(collection_1[i++]);
  while (j < collection_2.length) merged12.push(collection_2[j++]);

  let result: number[] = [];
  let x = 0, y = 0;
  while (x < merged12.length && y < reversed3.length) {
    if (merged12[x] < reversed3[y]) {
      result.push(merged12[x]);
      x++;
    } else {
      result.push(reversed3[y]);
      y++;
    }
  }

  while (x < merged12.length) result.push(merged12[x++]);
  while (y < reversed3.length) result.push(reversed3[y++]);

  return result;
}

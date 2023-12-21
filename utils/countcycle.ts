export function getcycle(unit: string, val: number) {
  const u = (): string => {
    switch (unit) {
      case "m":
        return "月";
      case "y":
        return "年";
      case "d":
        return "天";
      case "w":
        return "週";
    }
    return `每${val}${u()}`;
  };
}

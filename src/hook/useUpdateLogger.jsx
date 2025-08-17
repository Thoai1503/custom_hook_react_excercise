import { use, useEffect } from "react";

export function useUpdateLogger(value) {
  useEffect(() => {
    console.log("Updated Value:", value);
  }, [value]);
}

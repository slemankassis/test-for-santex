import { useCallback, useState } from 'react';

type CallbackType = (prev:string | null) => unknown;

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
): [string, (callback:CallbackType) => void] {
  const [ value, setValue ] = useState(localStorage.getItem(key) || "" + defaultValue);
  
  const performChange = useCallback((callback:CallbackType) => {
    const currentValue = localStorage.getItem(key);
    const newValue = "" + callback(currentValue);
    localStorage.setItem(key, newValue);
    setValue(newValue);
  }, [key, setValue]);

  return [value, performChange];
}

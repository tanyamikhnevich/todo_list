interface StorageProps {
  localKey: string;
  object: object;
}

export const setInLocalStorage = ({ localKey, object }: StorageProps) => {
  localStorage.setItem(localKey, JSON.stringify(object));
};

export const addInLocalStorage = ({ localKey, object }: StorageProps) => {
  const data = getLocalStorage(localKey);
  if (data) {
    localStorage.setItem(localKey, JSON.stringify([...data, object]));
  } else localStorage.setItem(localKey, JSON.stringify(object));
};

export const getLocalStorage = (localKey: string) => {
  const data = localStorage.getItem(localKey);
  return data ? JSON.parse(data) : null;
};

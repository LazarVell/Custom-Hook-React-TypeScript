import { useState } from "react";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
}

type SortFunction<T> = (a: T, b: T) => number;

interface useFormattedData<T> {
  formatted: T[];
  search?: (query: string) => useFormattedData<T>;
  filter?: (callback: (item: T) => boolean) => useFormattedData<T>;
  sortBy?: (
    callbackOrPropName: string | SortFunction<T>
  ) => useFormattedData<T>;
}

const useFormattedData = (initialData: User[]): useFormattedData<User> => {
  const [data, setData] = useState<User[]>(initialData);

  const UseFormattedData = () => {
    const formattedData = data.map((user) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        zip: user.zip,
        birthdate: user.birthdate,
        city: user.city,
      };
    });
    return { formatted: formattedData };
  };

  const search = (query: string): useFormattedData<User> => {
    setData((prevData) => {
      return prevData.filter((user) => {
        const searchString = `${user.firstName} ${user.lastName} ${user.email} ${user.city} ${user.gender}`;
        return searchString.toLowerCase().includes(query.toLowerCase());
      });
    });
    return UseFormattedData();
  };

  const filter = (
    callback: (item: User) => boolean
  ): useFormattedData<User> => {
    setData((prevData) => {
      return prevData.filter(callback);
    });
    return UseFormattedData();
  };

  const sortBy = (
    callbackOrPropName: string | number | SortFunction<User>
  ): useFormattedData<User> => {
    setData((prevData) => {
      if (typeof callbackOrPropName === "function") {
        return prevData.sort(callbackOrPropName);
      }
      return prevData.sort((a, b) =>
        a[callbackOrPropName as keyof User]
          .toString()
          .localeCompare(b[callbackOrPropName as keyof User].toString())
      );
    });
    return UseFormattedData();
  };

  return { formatted: data, search, filter, sortBy };
};

export default useFormattedData;

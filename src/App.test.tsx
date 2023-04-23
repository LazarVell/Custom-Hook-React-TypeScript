import { renderHook, act } from "@testing-library/react";
import useFormattedData, { User } from "./Components/useFormatted";

const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "male",
    zip: 12345,
    birthdate: "1990-01-01",
    city: "New York",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    gender: "female",
    zip: 23456,
    birthdate: "1995-01-01",
    city: "Los Angeles",
  },
];

describe("useFormattedData", () => {
  it("should format initial data correctly", () => {
    const { result } = renderHook(() => useFormattedData(users));
    expect(result.current.formatted).toEqual(users);
  });

  it("should filter data correctly", () => {
    const { result } = renderHook(() => useFormattedData(users));
    expect(
      result.current.formatted.filter((user) => user.gender === "male")
    ).toEqual([users[0]]);
  });

  it("should search data correctly", () => {
    const { result } = renderHook(() => useFormattedData(users));
    act(() => {
      (
        result as { current: { search: (query: string) => void } }
      ).current.search("john");
    });
    expect(result.current.formatted).toEqual([users[0]]);
  });
});

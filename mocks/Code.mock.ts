import React from "react";

export const useEffectMock = jest.fn();
export const useEffectSpy = jest.spyOn(React, "useEffect");

"use client";

import { create } from "zustand";
import { booksStore } from "./booksStore";

export const useBooksStore = create(booksStore);

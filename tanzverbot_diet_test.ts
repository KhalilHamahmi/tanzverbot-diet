import { assertGreater } from "@std/assert";
import { calcDateOnDiet, Sex } from "./tanzverbot_diet.ts";

Deno.test("Tanzverbot Diet", () => {
  assertGreater(calcDateOnDiet(74,80, 1.86, 38, Sex.Male), 0.0);
});

Deno.test("Tanzverbot Diet - Invalid Weight Loss", () => {
  try {
    calcDateOnDiet(74, 70, 1.86, 38, Sex.Male);
    throw new Error("Expected error was not thrown");
  } catch (error) {
    if (error instanceof Error) {
      assertGreater(error.message.indexOf("loosing"), -1);    
    } else {
      throw error;
    }
  }
});




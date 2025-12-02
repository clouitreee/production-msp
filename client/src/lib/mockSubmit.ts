export type FormType = "contact" | "checklist";

export interface SubmissionResult {
  success: boolean;
  message?: string;
}

/**
 * Simulates a backend form submission.
 * Logs the payload to the console and returns a promise that resolves after a delay.
 */
export async function submitForm(
  data: any,
  type: FormType
): Promise<SubmissionResult> {
  console.log(`[MockSubmit][${type}] Starting submission...`);

  // Simulate network delay (1-2 seconds)
  const delay = 1000 + Math.random() * 1000;

  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`[MockSubmit][${type}] Payload received:`, data);

      // Simulate success (always succeeds in this mock)
      resolve({
        success: true,
        message: "Submission successful",
      });
    }, delay);
  });
}

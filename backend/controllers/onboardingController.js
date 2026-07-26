import db from "../config/db.js";

export const completeOnboarding = async (req, res) => {
  try {
    const { id } = req.body;

    console.log("Received ID:", id);

    const [result] = await db.query(
      "UPDATE candidates SET onboardingCompleted = 1 WHERE id = ?",
      [id]
    );

    console.log("Update Result:", result);

    res.json({
      success: true,
      message: "Onboarding completed",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
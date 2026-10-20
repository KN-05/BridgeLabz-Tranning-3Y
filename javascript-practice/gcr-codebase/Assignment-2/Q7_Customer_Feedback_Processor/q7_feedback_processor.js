"use strict";
// ============================================================
// Q7 – Customer Feedback Processor
// Run: node q7_feedback_processor.js
// ============================================================

function analyzeFeedback(feedback) {
  // Count words: trim, split on any whitespace, drop empty pieces
  const words = feedback.trim().split(/\s+/).filter(word => word !== "");
  const wordCount = words.length;

  // Case-insensitive check for negative words using includes()
  const lowerFeedback = feedback.toLowerCase();
  const hasNegativeWord = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

  console.log(`Feedback   : "${feedback}"`);
  console.log(`Word count : ${wordCount}`);
  console.log(`Contains "bad" or "poor": ${hasNegativeWord}`);

  if (!hasNegativeWord) {
    console.log("Result     : Positive Feedback\n");
  } else {
    console.log("Result     : Needs Improvement\n");
  }
}

const feedback = "Great product! Fast delivery and amazing sound quality!";
analyzeFeedback(feedback);

// Extra test cases
analyzeFeedback("Poor packaging and bad customer support.");
analyzeFeedback("Okay product, but delivery was slow.");

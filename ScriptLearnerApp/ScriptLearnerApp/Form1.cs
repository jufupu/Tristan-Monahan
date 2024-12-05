using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace ScriptLearnerApp
{
    public partial class Form1 : Form
    {
        private List<string> scriptLines = new List<string>(); // List to store script lines
        private int currentLineIndex = 0; // Track the current line for practice
        private int elapsedTime = 0; // Track elapsed time for practice
        private int correctAnswers = 0; // Tracks the number of correct answers
        private int incorrectAnswers = 0; // Tracks the number of incorrect answers

        public Form1()
        {
            InitializeComponent();
        }


        // Add a new line to the script
        private void btnAddLine_Click(object sender, EventArgs e)
        {
            string inputText = txtLineInput.Text.Trim();

            // Split the input text into individual lines based on newline characters
            string[] lines = inputText.Split(new[] { "\r\n", "\n" }, StringSplitOptions.RemoveEmptyEntries);

            if (lines.Length > 0)
            {
                foreach (string line in lines)
                {
                    scriptLines.Add(line); // Add each line to the list
                    lstScriptLines.Items.Add(line); // Add each line to the ListBox
                }

                txtLineInput.Clear(); // Clear the TextBox after adding lines
                lblFeedback.Text = $"{lines.Length} line(s) added successfully!";
            }
            else
            {
                lblFeedback.Text = "Please enter valid lines.";
            }
        }


        // Start the practise session, display the first line
        private void btnStartPractice_Click(object sender, EventArgs e)
        {
            if (scriptLines.Count > 0)
            {
                // Clear the ListBox once practice starts
                lstScriptLines.Items.Clear();

                // Reset progress and timer
                currentLineIndex = 0;
                elapsedTime = 0;
                lblTimer.Text = "Time: 0 seconds";
                timerPractise.Start(); // Start the timer

                // Display the first line (hidden part)
                lblFeedback.Text = "Memorize the line:";
                lblFeedback.Text += $"\n{HidePartOfLine(scriptLines[currentLineIndex])}";
                lblProgress.Text = $"Progress: 0/{scriptLines.Count} lines completed.";
            }
            else
            {
                lblFeedback.Text = "No lines to practice!";
            }
        }


        // Move to the next line during practice
        private void btnNextLine_Click(object sender, EventArgs e)
        {
            currentLineIndex++; // Move to the next line
            if (currentLineIndex < scriptLines.Count)
            {
                // Show the next line, partially hidden
                lblFeedback.Text = "Memorize the line:";
                lblFeedback.Text += $"\n{HidePartOfLine(scriptLines[currentLineIndex])}";
                lblProgress.Text = $"Progress: {currentLineIndex + 1}/{scriptLines.Count} lines completed.";
            }
            else
            {
                // When all lines are completed
                lblFeedback.Text = $"Practice complete! Correct: {correctAnswers}, Incorrect: {incorrectAnswers}";
                lblProgress.Text = $"Progress: {scriptLines.Count}/{scriptLines.Count} lines completed.";
                timerPractise.Stop(); // Stop the timer
            }
        }


        // Show the full line as a hint
        private void btnShowHint_Click(object sender, EventArgs e)
        {
            if (currentLineIndex < scriptLines.Count)
            {
                lblFeedback.Text = $"Hint: {scriptLines[currentLineIndex]}";
            }
        }

        // Helper method to hide part of the line (for practice)
        private string HidePartOfLine(string line)
        {
            string[] words = line.Split(' ');
            for (int i = 0; i < words.Length / 2; i++) // Hide half of the words
            {
                words[i] = new string('_', words[i].Length); // Replace with underscores
            }
            return string.Join(" ", words); // Return the partially hidden line
        }

        // Timer event handler: Updates the timer every second
        private void timerPractice_Tick(object sender, EventArgs e)
        {
            elapsedTime++;
            lblTimer.Text = $"Time: {elapsedTime} seconds";
        }

        private void btnCorrect_Click(object sender, EventArgs e)
        {
            correctAnswers++; // Increment the correct answer count
            lblFeedback.Text = $"Correct! Moving to the next line. Correct: {correctAnswers}, Incorrect: {incorrectAnswers}";
            btnNextLine_Click(sender, e); // Proceed to the next line
        }

        private void btnIncorrect_Click(object sender, EventArgs e)
        {
            incorrectAnswers++; // Increment the incorrect answer count
            lblFeedback.Text = $"Incorrect! Moving to the next line. Correct: {correctAnswers}, Incorrect: {incorrectAnswers}";
            btnNextLine_Click(sender, e); // Proceed to the next line
        }

    }
}

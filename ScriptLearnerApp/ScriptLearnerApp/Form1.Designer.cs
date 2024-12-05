
using System.Drawing;

namespace ScriptLearnerApp
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.txtLineInput = new System.Windows.Forms.TextBox();
            this.lstScriptLines = new System.Windows.Forms.ListBox();
            this.btnAddLine = new System.Windows.Forms.Button();
            this.btnStartPractise = new System.Windows.Forms.Button();
            this.btnShowHint = new System.Windows.Forms.Button();
            this.lblFeedback = new System.Windows.Forms.Label();
            this.timerPractise = new System.Windows.Forms.Timer(this.components);
            this.lblTimer = new System.Windows.Forms.Label();
            this.lblProgress = new System.Windows.Forms.Label();
            this.btnCorrect = new System.Windows.Forms.Button();
            this.btnIncorrect = new System.Windows.Forms.Button();
            this.btnNextLine = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txtLineInput
            // 
            this.txtLineInput.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtLineInput.ForeColor = System.Drawing.Color.Gray;
            this.txtLineInput.Location = new System.Drawing.Point(49, 70);
            this.txtLineInput.Multiline = true;
            this.txtLineInput.Name = "txtLineInput";
            this.txtLineInput.Size = new System.Drawing.Size(550, 77);
            this.txtLineInput.TabIndex = 7;
            this.txtLineInput.Text = "Enter your script lines here...";
            // 
            // lstScriptLines
            // 
            this.lstScriptLines.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lstScriptLines.ForeColor = System.Drawing.Color.Gray;
            this.lstScriptLines.FormattingEnabled = true;
            this.lstScriptLines.ItemHeight = 21;
            this.lstScriptLines.Location = new System.Drawing.Point(49, 154);
            this.lstScriptLines.Name = "lstScriptLines";
            this.lstScriptLines.Size = new System.Drawing.Size(645, 130);
            this.lstScriptLines.TabIndex = 1;
            // 
            // btnAddLine
            // 
            this.btnAddLine.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnAddLine.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnAddLine.Location = new System.Drawing.Point(604, 70);
            this.btnAddLine.Name = "btnAddLine";
            this.btnAddLine.Size = new System.Drawing.Size(90, 77);
            this.btnAddLine.TabIndex = 2;
            this.btnAddLine.Text = "Add Lines";
            this.btnAddLine.UseVisualStyleBackColor = true;
            this.btnAddLine.Click += new System.EventHandler(this.btnAddLine_Click);
            // 
            // btnStartPractise
            // 
            this.btnStartPractise.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnStartPractise.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnStartPractise.Location = new System.Drawing.Point(619, 290);
            this.btnStartPractise.Name = "btnStartPractise";
            this.btnStartPractise.Size = new System.Drawing.Size(75, 29);
            this.btnStartPractise.TabIndex = 3;
            this.btnStartPractise.Text = "Start";
            this.btnStartPractise.UseVisualStyleBackColor = true;
            this.btnStartPractise.Click += new System.EventHandler(this.btnStartPractice_Click);
            // 
            // btnShowHint
            // 
            this.btnShowHint.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnShowHint.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnShowHint.Location = new System.Drawing.Point(49, 290);
            this.btnShowHint.Name = "btnShowHint";
            this.btnShowHint.Size = new System.Drawing.Size(75, 29);
            this.btnShowHint.TabIndex = 5;
            this.btnShowHint.Text = "Show Hint";
            this.btnShowHint.UseVisualStyleBackColor = true;
            // 
            // lblFeedback
            // 
            this.lblFeedback.AutoSize = true;
            this.lblFeedback.Location = new System.Drawing.Point(334, 357);
            this.lblFeedback.Name = "lblFeedback";
            this.lblFeedback.Size = new System.Drawing.Size(80, 19);
            this.lblFeedback.TabIndex = 6;
            this.lblFeedback.Text = "lblFeedback";
            // 
            // timerPractise
            // 
            this.timerPractise.Interval = 1000;
            this.timerPractise.Tick += new System.EventHandler(this.timerPractice_Tick);
            // 
            // lblTimer
            // 
            this.lblTimer.AutoSize = true;
            this.lblTimer.Location = new System.Drawing.Point(320, 438);
            this.lblTimer.Name = "lblTimer";
            this.lblTimer.Size = new System.Drawing.Size(107, 19);
            this.lblTimer.TabIndex = 8;
            this.lblTimer.Text = "Time: 0 Seconds";
            // 
            // lblProgress
            // 
            this.lblProgress.AutoSize = true;
            this.lblProgress.Location = new System.Drawing.Point(52, 415);
            this.lblProgress.Name = "lblProgress";
            this.lblProgress.Size = new System.Drawing.Size(0, 19);
            this.lblProgress.TabIndex = 9;
            // 
            // btnCorrect
            // 
            this.btnCorrect.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCorrect.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnCorrect.Location = new System.Drawing.Point(386, 496);
            this.btnCorrect.Name = "btnCorrect";
            this.btnCorrect.Size = new System.Drawing.Size(75, 40);
            this.btnCorrect.TabIndex = 10;
            this.btnCorrect.Text = "Correct";
            this.btnCorrect.UseVisualStyleBackColor = true;
            this.btnCorrect.Click += new System.EventHandler(this.btnCorrect_Click);
            // 
            // btnIncorrect
            // 
            this.btnIncorrect.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnIncorrect.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnIncorrect.Location = new System.Drawing.Point(275, 496);
            this.btnIncorrect.Name = "btnIncorrect";
            this.btnIncorrect.Size = new System.Drawing.Size(75, 40);
            this.btnIncorrect.TabIndex = 11;
            this.btnIncorrect.Text = "Incorrect";
            this.btnIncorrect.UseVisualStyleBackColor = true;
            this.btnIncorrect.Click += new System.EventHandler(this.btnIncorrect_Click);
            // 
            // btnNextLine
            // 
            this.btnNextLine.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnNextLine.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnNextLine.ImageAlign = System.Drawing.ContentAlignment.BottomCenter;
            this.btnNextLine.Location = new System.Drawing.Point(334, 290);
            this.btnNextLine.Name = "btnNextLine";
            this.btnNextLine.Size = new System.Drawing.Size(75, 29);
            this.btnNextLine.TabIndex = 4;
            this.btnNextLine.Text = "Next Line";
            this.btnNextLine.UseVisualStyleBackColor = true;
            this.btnNextLine.Click += new System.EventHandler(this.btnNextLine_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(251, 10);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(210, 32);
            this.label1.TabIndex = 12;
            this.label1.Text = "Script Learner App";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(249)))));
            this.ClientSize = new System.Drawing.Size(742, 612);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btnIncorrect);
            this.Controls.Add(this.btnCorrect);
            this.Controls.Add(this.lblProgress);
            this.Controls.Add(this.lblTimer);
            this.Controls.Add(this.lblFeedback);
            this.Controls.Add(this.btnShowHint);
            this.Controls.Add(this.btnNextLine);
            this.Controls.Add(this.btnStartPractise);
            this.Controls.Add(this.btnAddLine);
            this.Controls.Add(this.lstScriptLines);
            this.Controls.Add(this.txtLineInput);
            this.Cursor = System.Windows.Forms.Cursors.Default;
            this.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.Text = "Script Leaner App";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtLineInput;
        private System.Windows.Forms.ListBox lstScriptLines;
        private System.Windows.Forms.Button btnAddLine;
        private System.Windows.Forms.Button btnStartPractise;
        private System.Windows.Forms.Button btnShowHint;
        private System.Windows.Forms.Label lblFeedback;
        private System.Windows.Forms.Timer timerPractise;
        private System.Windows.Forms.Label lblTimer;
        private System.Windows.Forms.Label lblProgress;
        private System.Windows.Forms.Button btnCorrect;
        private System.Windows.Forms.Button btnIncorrect;
        private System.Windows.Forms.Button btnNextLine;
        private System.Windows.Forms.Label label1;
    }
}


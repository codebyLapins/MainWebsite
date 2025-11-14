import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_LNaydsaE_KLcbVqWyFVoiFYjvbL3pKYon');

const YOUR_EMAIL = 'info@codebylapins.com';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Build email HTML content
    const emailHtml = `
      <h1>New Project Request from ${formData.companyName}</h1>

      <h2>1. Company Information</h2>
      <p><strong>Company Name:</strong> ${formData.companyName}</p>
      <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Existing Website:</strong> ${formData.existingWebsite || 'None'}</p>
      <p><strong>Social Media:</strong> ${formData.socialMedia || 'Not provided'}</p>

      <h2>2. Project Goals</h2>
      <p><strong>Main Goal:</strong><br>${formData.mainGoal?.replace(/\n/g, '<br>')}</p>
      <p><strong>Target Audience:</strong><br>${formData.targetAudience?.replace(/\n/g, '<br>')}</p>
      <p><strong>Problems to Solve:</strong><br>${formData.problemsToSolve?.replace(/\n/g, '<br>') || 'Not specified'}</p>

      <h2>3. Design & Style</h2>
      <p><strong>Brand Guidelines:</strong> ${formData.brandGuidelines}</p>
      <p><strong>Websites You Like:</strong><br>${formData.websitesLike?.replace(/\n/g, '<br>') || 'Not provided'}</p>
      <p><strong>Design Style:</strong> ${formData.designStyle?.join(', ') || 'Not specified'}</p>
      <p><strong>Preferred Colors:</strong> ${formData.preferredColors || 'Not specified'}</p>

      <h2>4. Functionality</h2>
      <p><strong>Need E-commerce:</strong> ${formData.needEcommerce}</p>
      <p><strong>Number of Products:</strong> ${formData.numberOfProducts || 'N/A'}</p>
      <p><strong>Required Integrations:</strong> ${formData.integrations?.join(', ') || 'None'}</p>
      ${formData.integrationsOther ? `<p><strong>Other Integrations:</strong> ${formData.integrationsOther}</p>` : ''}
      <p><strong>Contact Forms Needed:</strong> ${formData.contactForms}</p>
      <p><strong>Languages:</strong> ${formData.languages?.join(', ') || 'Not specified'}</p>
      ${formData.languagesOther ? `<p><strong>Other Languages:</strong> ${formData.languagesOther}</p>` : ''}
      <p><strong>Blog/Articles Section:</strong> ${formData.blogSection}</p>
      <p><strong>Custom Functionality:</strong><br>${formData.customFunctionality?.replace(/\n/g, '<br>') || 'None'}</p>

      <h2>5. Content</h2>
      <p><strong>Provide Text Content:</strong> ${formData.provideContent}</p>
      <p><strong>Provide Images:</strong> ${formData.provideImages}</p>

      <h2>6. Technical</h2>
      <p><strong>Preferred Platform:</strong> ${formData.platform}</p>
      <p><strong>Already Have Hosting:</strong> ${formData.hasHosting}</p>
      <p><strong>Domain:</strong> ${formData.domain || 'Not yet'}</p>
      <p><strong>Professional Email Setup:</strong> ${formData.needEmail}</p>

      <h2>7. Page Structure</h2>
      <p><strong>Needed Sections:</strong> ${formData.sections?.join(', ') || 'Not specified'}</p>
      ${formData.sectionsOther ? `<p><strong>Other Sections:</strong> ${formData.sectionsOther}</p>` : ''}
      <p><strong>Additional Pages:</strong><br>${formData.additionalPages?.replace(/\n/g, '<br>') || 'None'}</p>

      <h2>8. Timeline & Budget</h2>
      <p><strong>Preferred Start Date:</strong> ${formData.startDate || 'Flexible'}</p>
      <p><strong>Preferred Launch Date:</strong> ${formData.launchDate || 'Flexible'}</p>
      <p><strong>Estimated Budget:</strong> ${formData.budget}</p>

      <h2>9. After-launch Services</h2>
      <p><strong>Need Ongoing Maintenance:</strong> ${formData.needMaintenance}</p>
      <p><strong>Update Frequency:</strong> ${formData.updateFrequency || 'N/A'}</p>
      <p><strong>Need Training:</strong> ${formData.needTraining}</p>

      <h2>10. Additional Notes</h2>
      <p>${formData.additionalNotes?.replace(/\n/g, '<br>') || 'None'}</p>

      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'CodeByLapins <onboarding@resend.dev>',
      to: [YOUR_EMAIL],
      replyTo: formData.email,
      subject: `New Project Request: ${formData.companyName}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

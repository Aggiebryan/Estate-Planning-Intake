import React from 'react';
    import { useForm } from 'react-hook-form';
    import { createClient } from '@supabase/supabase-js';
    import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

    const supabaseUrl = 'https://sjzdruvnenojuqsrcgpw.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqemRydXZuZW5vanVxc3JjZ3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5Mjk4ODUsImV4cCI6MjA1MTUwNTg4NX0.4gx5MVyAK2y4raDb1CUkRhLuvRtXfbmQB8VM9dU1egE';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const styles = StyleSheet.create({
      page: {
        padding: 30,
      },
      section: {
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
      },
      label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
      },
      text: {
        fontSize: 12,
        marginBottom: 5,
      },
    });

    const EstatePlanningDocument = ({ formData }) => (
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Personal Information</Text>
            <Text style={styles.label}>Full Legal Name:</Text>
            <Text style={styles.text}>{formData.personalInfo.firstName} {formData.personalInfo.middleName} {formData.personalInfo.lastName}</Text>
            <Text style={styles.label}>Other Names Known By:</Text>
            <Text style={styles.text}>{formData.personalInfo.otherNames}</Text>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.text}>{formData.personalInfo.dateOfBirth}</Text>
            <Text style={styles.label}>Social Security Number:</Text>
            <Text style={styles.text}>{formData.personalInfo.ssn}</Text>
            <Text style={styles.label}>U.S. Citizen?</Text>
            <Text style={styles.text}>{formData.personalInfo.usCitizen ? 'Yes' : 'No'}</Text>
            <Text style={styles.label}>Driver’s License Number:</Text>
            <Text style={styles.text}>{formData.personalInfo.driversLicense}</Text>
            <Text style={styles.label}>Home Address:</Text>
            <Text style={styles.text}>{formData.personalInfo.homeAddress}</Text>
            <Text style={styles.label}>City:</Text>
            <Text style={styles.text}>{formData.personalInfo.city}</Text>
            <Text style={styles.label}>State:</Text>
            <Text style={styles.text}>{formData.personalInfo.state}</Text>
            <Text style={styles.label}>Zip:</Text>
            <Text style={styles.text}>{formData.personalInfo.zip}</Text>
            <Text style={styles.label}>Phone Numbers:</Text>
            <Text style={styles.text}>Home: {formData.personalInfo.homePhone}</Text>
            <Text style={styles.text}>Work: {formData.personalInfo.workPhone}</Text>
            <Text style={styles.text}>Mobile: {formData.personalInfo.mobilePhone}</Text>
            <Text style={styles.label}>Email Address:</Text>
            <Text style={styles.text}>{formData.personalInfo.email}</Text>
            <Text style={styles.label}>Marital Status:</Text>
            <Text style={styles.text}>{formData.personalInfo.maritalStatus}</Text>
            <Text style={styles.label}>Date of Marriage (if applicable):</Text>
            <Text style={styles.text}>{formData.personalInfo.marriageDate}</Text>
            <Text style={styles.label}>Date of Divorce (if applicable):</Text>
            <Text style={styles.text}>{formData.personalInfo.divorceDate}</Text>
          </View>
          {formData.spouseInfo && (
            <View style={styles.section}>
              <Text style={styles.title}>Spouse Information</Text>
              <Text style={styles.label}>Full Legal Name:</Text>
              <Text style={styles.text}>{formData.spouseInfo.firstName} {formData.spouseInfo.middleName} {formData.spouseInfo.lastName}</Text>
              <Text style={styles.label}>Other Names Known By:</Text>
              <Text style={styles.text}>{formData.spouseInfo.otherNames}</Text>
              <Text style={styles.label}>Date of Birth:</Text>
              <Text style={styles.text}>{formData.spouseInfo.dateOfBirth}</Text>
              <Text style={styles.label}>Social Security Number:</Text>
              <Text style={styles.text}>{formData.spouseInfo.ssn}</Text>
              <Text style={styles.label}>U.S. Citizen?</Text>
              <Text style={styles.text}>{formData.spouseInfo.usCitizen ? 'Yes' : 'No'}</Text>
              <Text style={styles.label}>Phone Numbers:</Text>
              <Text style={styles.text}>Home: {formData.spouseInfo.homePhone}</Text>
              <Text style={styles.text}>Work: {formData.spouseInfo.workPhone}</Text>
              <Text style={styles.text}>Mobile: {formData.spouseInfo.mobilePhone}</Text>
              <Text style={styles.label}>Email Address:</Text>
              <Text style={styles.text}>{formData.spouseInfo.email}</Text>
              <Text style={styles.label}>Do you have a prenuptial agreement?</Text>
              <Text style={styles.text}>{formData.spouseInfo.prenuptialAgreement ? 'Yes' : 'No'}</Text>
            </View>
          )}
          <View style={styles.section}>
            <Text style={styles.title}>Children and Family Information</Text>
            {formData.childrenInfo && formData.childrenInfo.map((child, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.text}>{child.name}</Text>
                <Text style={styles.label}>Date of Birth:</Text>
                <Text style={styles.text}>{child.dateOfBirth}</Text>
                <Text style={styles.label}>Parent(s):</Text>
                <Text style={styles.text}>{child.parents}</Text>
                <Text style={styles.label}>Address:</Text>
                <Text style={styles.text}>{child.address}</Text>
              </View>
            ))}
            <Text style={styles.label}>Does any child have special needs or disabilities?</Text>
            <Text style={styles.text}>{formData.specialNeeds ? 'Yes' : 'No'}</Text>
            <Text style={styles.text}>{formData.specialNeedsExplanation}</Text>
            <Text style={styles.label}>Are you excluding any children or relatives?</Text>
            <Text style={styles.text}>{formData.excludingChildren ? 'Yes' : 'No'}</Text>
            <Text style={styles.text}>{formData.excludingChildrenExplanation}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Assets</Text>
            <Text style={styles.label}>Real Estate</Text>
            {formData.realEstate && formData.realEstate.map((property, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Property Address:</Text>
                <Text style={styles.text}>{property.address}</Text>
                <Text style={styles.label}>Value:</Text>
                <Text style={styles.text}>{property.value}</Text>
                <Text style={styles.label}>Ownership Type:</Text>
                <Text style={styles.text}>{property.ownershipType}</Text>
                <Text style={styles.label}>Mortgage Balance:</Text>
                <Text style={styles.text}>{property.mortgageBalance}</Text>
              </View>
            ))}
            <Text style={styles.label}>Bank Accounts and Investments</Text>
            {formData.bankAccounts && formData.bankAccounts.map((account, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Bank/Institution Name:</Text>
                <Text style={styles.text}>{account.bankName}</Text>
                <Text style={styles.label}>Account Type:</Text>
                <Text style={styles.text}>{account.accountType}</Text>
                <Text style={styles.label}>Balance/Value:</Text>
                <Text style={styles.text}>{account.balance}</Text>
                <Text style={styles.label}>Ownership:</Text>
                <Text style={styles.text}>{account.ownership}</Text>
              </View>
            ))}
            <Text style={styles.label}>Retirement Accounts and Insurance</Text>
            {formData.retirementAccounts && formData.retirementAccounts.map((account, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Account/Policy Type:</Text>
                <Text style={styles.text}>{account.accountType}</Text>
                <Text style={styles.label}>Institution:</Text>
                <Text style={styles.text}>{account.institution}</Text>
                <Text style={styles.label}>Balance/Value:</Text>
                <Text style={styles.text}>{account.balance}</Text>
                <Text style={styles.label}>Beneficiary:</Text>
                <Text style={styles.text}>{account.beneficiary}</Text>
              </View>
            ))}
            <Text style={styles.label}>Tangible Personal Property</Text>
            {formData.tangibleProperty && formData.tangibleProperty.map((item, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.text}>{item.description}</Text>
                <Text style={styles.label}>Estimated Value:</Text>
                <Text style={styles.text}>{item.value}</Text>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.text}>{item.location}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Fiduciaries</Text>
            <Text style={styles.label}>Executor of Will</Text>
            <Text style={styles.text}>Primary: {formData.executorPrimary}</Text>
            <Text style={styles.text}>Alternate: {formData.executorAlternate}</Text>
            <Text style={styles.label}>Trustee (if applicable)</Text>
            <Text style={styles.text}>Primary: {formData.trusteePrimary}</Text>
            <Text style={styles.text}>Alternate: {formData.trusteeAlternate}</Text>
            <Text style={styles.label}>Guardian for Minor Children</Text>
            <Text style={styles.text}>Primary: {formData.guardianPrimary}</Text>
            <Text style={styles.text}>Alternate: {formData.guardianAlternate}</Text>
            <Text style={styles.label}>Agent for Durable Power of Attorney</Text>
            <Text style={styles.text}>Primary: {formData.powerOfAttorneyPrimary}</Text>
            <Text style={styles.text}>Alternate: {formData.powerOfAttorneyAlternate}</Text>
            <Text style={styles.label}>Health Care Agent</Text>
            <Text style={styles.text}>Primary: {formData.healthCareAgentPrimary}</Text>
            <Text style={styles.text}>Alternate: {formData.healthCareAgentAlternate}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Distribution of Estate</Text>
            <Text style={styles.label}>Do you wish to divide your estate equally among your children?</Text>
            <Text style={styles.text}>{formData.equalDivision ? 'Yes' : 'No'}</Text>
            <Text style={styles.text}>{formData.distributionWishes}</Text>
            <Text style={styles.label}>Specific Bequests</Text>
            {formData.specificBequests && formData.specificBequests.map((bequest, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Beneficiary Name:</Text>
                <Text style={styles.text}>{bequest.beneficiaryName}</Text>
                <Text style={styles.label}>Relationship:</Text>
                <Text style={styles.text}>{bequest.relationship}</Text>
                <Text style={styles.label}>Gift Description:</Text>
                <Text style={styles.text}>{bequest.giftDescription}</Text>
              </View>
            ))}
            <Text style={styles.label}>Charitable Bequests</Text>
            {formData.charitableBequests && formData.charitableBequests.map((bequest, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.label}>Organization Name:</Text>
                <Text style={styles.text}>{bequest.organizationName}</Text>
                <Text style={styles.label}>Gift Description:</Text>
                <Text style={styles.text}>{bequest.giftDescription}</Text>
              </View>
            ))}
            <Text style={styles.label}>Residuary Estate (Remaining Assets):</Text>
            <Text style={styles.text}>{formData.residuaryEstate}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Additional Instructions</Text>
            <Text style={styles.label}>Do you wish to create a living trust?</Text>
            <Text style={styles.text}>{formData.livingTrust ? 'Yes' : 'No'}</Text>
            <Text style={styles.label}>Do you have any existing estate planning documents?</Text>
            <Text style={styles.text}>{formData.existingDocuments ? 'Yes' : 'No'}</Text>
            <Text style={styles.text}>{formData.existingDocumentsList}</Text>
            <Text style={styles.label}>Are there any other matters or concerns to address during your consultation?</Text>
            <Text style={styles.text}>{formData.additionalConcerns}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Signature:</Text>
            <Text style={styles.text}>{formData.signature}</Text>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.text}>{formData.date}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Attorney Notes:</Text>
            <Text style={styles.text}>{formData.attorneyNotes}</Text>
          </View>
        </Page>
      </Document>
    );

    function App() {
      const { register, handleSubmit, formState: { errors }, control, reset, getValues, setValue } = useForm({
        defaultValues: {
          personalInfo: {
            firstName: '',
            middleName: '',
            lastName: '',
            otherNames: '',
            dateOfBirth: '',
            ssn: '',
            usCitizen: false,
            driversLicense: '',
            homeAddress: '',
            city: '',
            state: '',
            zip: '',
            homePhone: '',
            workPhone: '',
            mobilePhone: '',
            email: '',
            maritalStatus: '',
            marriageDate: '',
            divorceDate: '',
          },
          spouseInfo: {
            firstName: '',
            middleName: '',
            lastName: '',
            otherNames: '',
            dateOfBirth: '',
            ssn: '',
            usCitizen: false,
            homePhone: '',
            workPhone: '',
            mobilePhone: '',
            email: '',
            prenuptialAgreement: false,
          },
          childrenInfo: [{ name: '', dateOfBirth: '', parents: '', address: '' }],
          specialNeeds: false,
          specialNeedsExplanation: '',
          excludingChildren: false,
          excludingChildrenExplanation: '',
          realEstate: [{ address: '', value: '', ownershipType: '', mortgageBalance: '' }],
          bankAccounts: [{ bankName: '', accountType: '', balance: '', ownership: '' }],
          retirementAccounts: [{ accountType: '', institution: '', balance: '', beneficiary: '' }],
          tangibleProperty: [{ description: '', value: '', location: '' }],
          executorPrimary: '',
          executorAlternate: '',
          trusteePrimary: '',
          trusteeAlternate: '',
          guardianPrimary: '',
          guardianAlternate: '',
          powerOfAttorneyPrimary: '',
          powerOfAttorneyAlternate: '',
          healthCareAgentPrimary: '',
          healthCareAgentAlternate: '',
          equalDivision: false,
          distributionWishes: '',
          specificBequests: [{ beneficiaryName: '', relationship: '', giftDescription: '' }],
          charitableBequests: [{ organizationName: '', giftDescription: '' }],
          residuaryEstate: '',
          livingTrust: false,
          existingDocuments: false,
          existingDocumentsList: '',
          additionalConcerns: '',
          signature: '',
          date: '',
          attorneyNotes: '',
        },
      });
      const [pdfBlob, setPdfBlob] = React.useState(null);
      const [showPdf, setShowPdf] = React.useState(false);

      const onSubmit = async (data) => {
        try {
          const { error } = await supabase
            .from('estate_planning_forms')
            .insert([data]);

          if (error) {
            console.error('Error saving data to Supabase:', error);
          } else {
            console.log('Data saved to Supabase successfully!');
          }
        } catch (error) {
          console.error('Error saving data to Supabase:', error);
        }
        generatePdf(data);
      };

      const generatePdf = async (formData) => {
        const pdfBlob = await new Promise((resolve) => {
          const viewer = <PDFViewer width={0} height={0}><EstatePlanningDocument formData={formData} /></PDFViewer>;
          const container = document.createElement('div');
          document.body.appendChild(container);
          ReactDOM.render(viewer, container, () => {
            const pdf = container.querySelector('iframe').contentWindow.document.querySelector('canvas').toBlob(blob => {
              resolve(blob);
              document.body.removeChild(container);
            });
          });
        });
        setPdfBlob(pdfBlob);
        setShowPdf(true);
      };

      const handleDownload = () => {
        if (pdfBlob) {
          const url = URL.createObjectURL(pdfBlob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'estate_planning_form.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      };

      const handleDownloadTxt = () => {
        const formDataString = JSON.stringify(getValues(), null, 2);
        const blob = new Blob([formDataString], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'estate_planning_form.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };

      const handleAddChild = () => {
        const currentChildren = getValues('childrenInfo') || [];
        setValue('childrenInfo', [...currentChildren, { name: '', dateOfBirth: '', parents: '', address: '' }]);
      };

      const handleRemoveChild = (index) => {
        const currentChildren = getValues('childrenInfo') || [];
        const updatedChildren = currentChildren.filter((_, i) => i !== index);
        setValue('childrenInfo', updatedChildren);
      };

      const handleAddRealEstate = () => {
        control.update(state => ({
          ...state,
          realEstate: [...state.realEstate, { address: '', value: '', ownershipType: '', mortgageBalance: '' }],
        }));
      };

      const handleRemoveRealEstate = (index) => {
        control.update(state => ({
          ...state,
          realEstate: state.realEstate.filter((_, i) => i !== index),
        }));
      };

      const handleAddBankAccount = () => {
        control.update(state => ({
          ...state,
          bankAccounts: [...state.bankAccounts, { bankName: '', accountType: '', balance: '', ownership: '' }],
        }));
      };

      const handleRemoveBankAccount = (index) => {
        control.update(state => ({
          ...state,
          bankAccounts: state.bankAccounts.filter((_, i) => i !== index),
        }));
      };

      const handleAddRetirementAccount = () => {
        control.update(state => ({
          ...state,
          retirementAccounts: [...state.retirementAccounts, { accountType: '', institution: '', balance: '', beneficiary: '' }],
        }));
      };

      const handleRemoveRetirementAccount = (index) => {
        control.update(state => ({
          ...state,
          retirementAccounts: state.retirementAccounts.filter((_, i) => i !== index),
        }));
      };

      const handleAddTangibleProperty = () => {
        control.update(state => ({
          ...state,
          tangibleProperty: [...state.tangibleProperty, { description: '', value: '', location: '' }],
        }));
      };

      const handleRemoveTangibleProperty = (index) => {
        control.update(state => ({
          ...state,
          tangibleProperty: state.tangibleProperty.filter((_, i) => i !== index),
        }));
      };

      const handleAddSpecificBequest = () => {
        control.update(state => ({
          ...state,
          specificBequests: [...state.specificBequests, { beneficiaryName: '', relationship: '', giftDescription: '' }],
        }));
      };

      const handleRemoveSpecificBequest = (index) => {
        control.update(state => ({
          ...state,
          specificBequests: state.specificBequests.filter((_, i) => i !== index),
        }));
      };

      const handleAddCharitableBequest = () => {
        control.update(state => ({
          ...state,
          charitableBequests: [...state.charitableBequests, { organizationName: '', giftDescription: '' }],
        }));
      };

      const handleRemoveCharitableBequest = (index) => {
        control.update(state => ({
          ...state,
          charitableBequests: state.charitableBequests.filter((_, i) => i !== index),
        }));
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" {...register("personalInfo.firstName", { required: true })} />
              {errors.personalInfo?.firstName && <p className="error-message">First name is required</p>}
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input type="text" {...register("personalInfo.middleName")} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" {...register("personalInfo.lastName", { required: true })} />
              {errors.personalInfo?.lastName && <p className="error-message">Last name is required</p>}
            </div>
            <div className="form-group">
              <label>Other Names Known By</label>
              <input type="text" {...register("personalInfo.otherNames")} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" {...register("personalInfo.dateOfBirth", { required: true })} />
              {errors.personalInfo?.dateOfBirth && <p className="error-message">Date of birth is required</p>}
            </div>
            <div className="form-group">
              <label>Social Security Number</label>
              <input type="text" {...register("personalInfo.ssn", { required: true })} />
              {errors.personalInfo?.ssn && <p className="error-message">Social Security Number is required</p>}
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("personalInfo.usCitizen")} /> U.S. Citizen?
              </label>
            </div>
            <div className="form-group">
              <label>Driver’s License Number</label>
              <input type="text" {...register("personalInfo.driversLicense")} />
            </div>
            <div className="form-group">
              <label>Home Address</label>
              <input type="text" {...register("personalInfo.homeAddress", { required: true })} />
              {errors.personalInfo?.homeAddress && <p className="error-message">Home address is required</p>}
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" {...register("personalInfo.city", { required: true })} />
              {errors.personalInfo?.city && <p className="error-message">City is required</p>}
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" {...register("personalInfo.state", { required: true })} />
              {errors.personalInfo?.state && <p className="error-message">State is required</p>}
            </div>
            <div className="form-group">
              <label>Zip</label>
              <input type="text" {...register("personalInfo.zip", { required: true })} />
              {errors.personalInfo?.zip && <p className="error-message">Zip code is required</p>}
            </div>
            <div className="form-group">
              <label>Home Phone</label>
              <input type="tel" {...register("personalInfo.homePhone")} />
            </div>
            <div className="form-group">
              <label>Work Phone</label>
              <input type="tel" {...register("personalInfo.workPhone")} />
            </div>
            <div className="form-group">
              <label>Mobile Phone</label>
              <input type="tel" {...register("personalInfo.mobilePhone")} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" {...register("personalInfo.email", { required: true })} />
              {errors.personalInfo?.email && <p className="error-message">Email is required</p>}
            </div>
            <div className="form-group">
              <label>Marital Status</label>
              <select {...register("personalInfo.maritalStatus", { required: true })}>
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
              {errors.personalInfo?.maritalStatus && <p className="error-message">Marital status is required</p>}
            </div>
            <div className="form-group">
              <label>Date of Marriage (if applicable)</label>
              <input type="date" {...register("personalInfo.marriageDate")} />
            </div>
            <div className="form-group">
              <label>Date of Divorce (if applicable)</label>
              <input type="date" {...register("personalInfo.divorceDate")} />
            </div>
          </div>

          <div className="form-section">
            <h2>Spouse Information (if applicable)</h2>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" {...register("spouseInfo.firstName")} />
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input type="text" {...register("spouseInfo.middleName")} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" {...register("spouseInfo.lastName")} />
            </div>
            <div className="form-group">
              <label>Other Names Known By</label>
              <input type="text" {...register("spouseInfo.otherNames")} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" {...register("spouseInfo.dateOfBirth")} />
            </div>
            <div className="form-group">
              <label>Social Security Number</label>
              <input type="text" {...register("spouseInfo.ssn")} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("spouseInfo.usCitizen")} /> U.S. Citizen?
              </label>
            </div>
            <div className="form-group">
              <label>Home Phone</label>
              <input type="tel" {...register("spouseInfo.homePhone")} />
            </div>
            <div className="form-group">
              <label>Work Phone</label>
              <input type="tel" {...register("spouseInfo.workPhone")} />
            </div>
            <div className="form-group">
              <label>Mobile Phone</label>
              <input type="tel" {...register("spouseInfo.mobilePhone")} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" {...register("spouseInfo.email")} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("spouseInfo.prenuptialAgreement")} /> Do you have a prenuptial agreement?
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2>Children and Family Information</h2>
            {getValues().childrenInfo?.map((child, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" {...register(`childrenInfo.${index}.name`)} />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input type="date" {...register(`childrenInfo.${index}.dateOfBirth`)} />
                </div>
                <div className="form-group">
                  <label>Parent(s)</label>
                  <input type="text" {...register(`childrenInfo.${index}.parents`)} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" {...register(`childrenInfo.${index}.address`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveChild(index)}>Remove Child</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddChild}>Add Child</button>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("specialNeeds")} /> Does any child have special needs or disabilities?
              </label>
            </div>
            {getValues().specialNeeds && (
              <div className="form-group">
                <label>Please explain:</label>
                <textarea {...register("specialNeedsExplanation")} />
              </div>
            )}

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("excludingChildren")} /> Are you excluding any children or relatives?
              </label>
            </div>
            {getValues().excludingChildren && (
              <div className="form-group">
                <label>Please explain:</label>
                <textarea {...register("excludingChildrenExplanation")} />
              </div>
            )}
          </div>

          <div className="form-section">
            <h2>Assets</h2>
            <h3>Real Estate</h3>
            {getValues().realEstate?.map((property, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Property Address</label>
                  <input type="text" {...register(`realEstate.${index}.address`)} />
                </div>
                <div className="form-group">
                  <label>Value</label>
                  <input type="number" {...register(`realEstate.${index}.value`)} />
                </div>
                <div className="form-group">
                  <label>Ownership Type</label>
                  <input type="text" {...register(`realEstate.${index}.ownershipType`)} />
                </div>
                <div className="form-group">
                  <label>Mortgage Balance</label>
                  <input type="number" {...register(`realEstate.${index}.mortgageBalance`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveRealEstate(index)}>Remove Property</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddRealEstate}>Add Property</button>

            <h3>Bank Accounts and Investments</h3>
            {getValues().bankAccounts?.map((account, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Bank/Institution Name</label>
                  <input type="text" {...register(`bankAccounts.${index}.bankName`)} />
                </div>
                <div className="form-group">
                  <label>Account Type</label>
                  <input type="text" {...register(`bankAccounts.${index}.accountType`)} />
                </div>
                <div className="form-group">
                  <label>Balance/Value</label>
                  <input type="number" {...register(`bankAccounts.${index}.balance`)} />
                </div>
                <div className="form-group">
                  <label>Ownership</label>
                  <input type="text" {...register(`bankAccounts.${index}.ownership`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveBankAccount(index)}>Remove Account</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddBankAccount}>Add Account</button>

            <h3>Retirement Accounts and Insurance</h3>
            {getValues().retirementAccounts?.map((account, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Account/Policy Type</label>
                  <input type="text" {...register(`retirementAccounts.${index}.accountType`)} />
                </div>
                <div className="form-group">
                  <label>Institution</label>
                  <input type="text" {...register(`retirementAccounts.${index}.institution`)} />
                </div>
                <div className="form-group">
                  <label>Balance/Value</label>
                  <input type="number" {...register(`retirementAccounts.${index}.balance`)} />
                </div>
                <div className="form-group">
                  <label>Beneficiary</label>
                  <input type="text" {...register(`retirementAccounts.${index}.beneficiary`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveRetirementAccount(index)}>Remove Account</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddRetirementAccount}>Add Account</button>

            <h3>Tangible Personal Property</h3>
            {getValues().tangibleProperty?.map((item, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" {...register(`tangibleProperty.${index}.description`)} />
                </div>
                <div className="form-group">
                  <label>Estimated Value</label>
                  <input type="number" {...register(`tangibleProperty.${index}.value`)} />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" {...register(`tangibleProperty.${index}.location`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveTangibleProperty(index)}>Remove Item</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddTangibleProperty}>Add Item</button>
          </div>

          <div className="form-section">
            <h2>Fiduciaries</h2>
            <div className="form-group">
              <label>Executor of Will - Primary</label>
              <input type="text" {...register("executorPrimary")} />
            </div>
            <div className="form-group">
              <label>Executor of Will - Alternate</label>
              <input type="text" {...register("executorAlternate")} />
            </div>
            <div className="form-group">
              <label>Trustee - Primary</label>
              <input type="text" {...register("trusteePrimary")} />
            </div>
            <div className="form-group">
              <label>Trustee - Alternate</label>
              <input type="text" {...register("trusteeAlternate")} />
            </div>
            <div className="form-group">
              <label>Guardian for Minor Children - Primary</label>
              <input type="text" {...register("guardianPrimary")} />
            </div>
            <div className="form-group">
              <label>Guardian for Minor Children - Alternate</label>
              <input type="text" {...register("guardianAlternate")} />
            </div>
            <div className="form-group">
              <label>Agent for Durable Power of Attorney - Primary</label>
              <input type="text" {...register("powerOfAttorneyPrimary")} />
            </div>
            <div className="form-group">
              <label>Agent for Durable Power of Attorney - Alternate</label>
              <input type="text" {...register("powerOfAttorneyAlternate")} />
            </div>
            <div className="form-group">
              <label>Health Care Agent - Primary</label>
              <input type="text" {...register("healthCareAgentPrimary")} />
            </div>
            <div className="form-group">
              <label>Health Care Agent - Alternate</label>
              <input type="text" {...register("healthCareAgentAlternate")} />
            </div>
          </div>

          <div className="form-section">
            <h2>Distribution of Estate</h2>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("equalDivision")} /> Do you wish to divide your estate equally among your children?
              </label>
            </div>
            {!getValues().equalDivision && (
              <div className="form-group">
                <label>Please describe your wishes:</label>
                <textarea {...register("distributionWishes")} />
              </div>
            )}

            <h3>Specific Bequests</h3>
            {getValues().specificBequests?.map((bequest, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Beneficiary Name</label>
                  <input type="text" {...register(`specificBequests.${index}.beneficiaryName`)} />
                </div>
                <div className="form-group">
                  <label>Relationship</label>
                  <input type="text" {...register(`specificBequests.${index}.relationship`)} />
                </div>
                <div className="form-group">
                  <label>Gift Description</label>
                  <input type="text" {...register(`specificBequests.${index}.giftDescription`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveSpecificBequest(index)}>Remove Bequest</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddSpecificBequest}>Add Bequest</button>

            <h3>Charitable Bequests</h3>
            {getValues().charitableBequests?.map((bequest, index) => (
              <div key={index}>
                <div className="form-group">
                  <label>Organization Name</label>
                  <input type="text" {...register(`charitableBequests.${index}.organizationName`)} />
                </div>
                <div className="form-group">
                  <label>Gift Description</label>
                  <input type="text" {...register(`charitableBequests.${index}.giftDescription`)} />
                </div>
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveCharitableBequest(index)}>Remove Bequest</button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddCharitableBequest}>Add Charitable Bequest</button>

            <div className="form-group">
              <label>Residuary Estate (Remaining Assets)</label>
              <textarea {...register("residuaryEstate")} />
            </div>
          </div>

          <div className="form-section">
            <h2>Additional Instructions</h2>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("livingTrust")} /> Do you wish to create a living trust?
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("existingDocuments")} /> Do you have any existing estate planning documents?
              </label>
            </div>
            {getValues().existingDocuments && (
              <div className="form-group">
                <label>Please list:</label>
                <textarea {...register("existingDocumentsList")} />
              </div>
            )}
            <div className="form-group">
              <label>Are there any other matters or concerns to address during your consultation?</label>
              <textarea {...register("additionalConcerns")} />
            </div>
          </div>

          <div className="form-section">
            <h2>Signature</h2>
            <div className="form-group">
              <label>Signature</label>
              <input type="text" {...register("signature", { required: true })} />
              {errors.signature && <p className="error-message">Signature is required</p>}
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" {...register("date", { required: true })} />
              {errors.date && <p className="error-message">Date is required</p>}
            </div>
          </div>

          <div className="form-section">
            <h2>Attorney Notes</h2>
            <div className="form-group">
              <label>Notes</label>
              <textarea {...register("attorneyNotes")} />
            </div>
          </div>

          <div className="form-section">
            <button type="submit">Save Form</button>
            <button type="button" onClick={handleDownload}>Download PDF</button>
            <button type="button" onClick={handleDownloadTxt}>Download TXT</button>
          </div>
        </form>
      );
    }

    export default App;

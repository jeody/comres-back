const { de } = require('date-fns/locale');
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        user_id: {
            type: Number,
            required: true,
            default: 0
        },
        rescom_id: {
            type: Number,
            required: true,
            default: 0
        },
        bde_id: {
            type: Number,
            required: true,
            default: 0
        },
        motherUnit_id: {
            type: Number,
            required: true,
            default: 0
        },
        first_name: {
            type: String,
            trim: true
        },
        middle_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        name: {
            type: String
        },
        suffix: {
            type: String,
            trim: true
        },
        rank: {
            type: String,
            trim: true
        },
        afpsn: {
            type: String
        },
        brsvc: {
            type: String
        },
        afos: {
            type: String
        },
        corps: {
            type: String
        },
        tasg: {
            type: Number,
            required: true,
            default: 0
        },
        job: {
            type: String
        },
        educ: {
            type: String,
            trim: true
        },
        highest_educ: {
            type: String,
            trim: true
        },
        educ_id: {
            type: Number
        },
        street: {
            type: String,
            trim: true
        },
        barangay: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        city_code: {
            type: String,
            trim: true
        },
        cityId: {
            type: String,
            trim: true
        },
        province: {
            type: String,
            trim: true
        },
        province_id: {
            type: String,
            trim: true
        },
        provinceId: {
            type: String,
            trim: true
        },
        region: {
            type: String,
            trim: true
        },
        region_id: {
            type: String,
            trim: true
        },
        regionId: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            default: 'Philippines'
        },
        address1: {
            type: String,
            trim: true
        },        
        address: {
            type: String,
            trim: true
        }, 
        zip_code: {
            type: String,
            trim: true
        },
        birthdate: {
            type: Date
        },
        birthplace: {
            type: String
        },
        age: {
            type: Number
        },
        nicknames: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true,
            default: '+63'
        }, 
        cellphone: {
            type: String,
            trim: true
        }, 
        email: {
            type: String
        },  
        religion: {
            type: String,
            trim: true
        },
        religion_id: {
            type: Number
        },
        age: {
            type: Number
        },
        email_add: {
            type: String
        },
        sex: {
            type: String
        },
        height: {
            type: String
        },
        weight: {
            type: String
        },
        build: {
            type: String
        },
        scars: {
            type: String
        },
        health: {
            type: String
        },
        marital_status: {
            type: String
        },
        spouse: {
            type: String
        },
        spouse_bday: {
            type: Date
        },
        marraige: {
            type: String
        },
        verify: {
            type: Boolean
        },
        verified_by: {
            type: Number,
            default: 0
        },
        designation: {
            type: String
        },
        designated: {
            type: String
        },
        reserve_unit: {
            type: String
        },
        date_commission: {
            type: Date
        },
        source_commission: {
            type: String
        },
        authority: {
            type: String
        },
        initial_rank_code: {
            type: Number
        },
        rank_code: {
            type: String
        },
        initial_rank: {
            type: String
        },
        date_last_promotion: {
            type: Date
        },
        lastPromotionAuthority: {
            typr: String
        },
        level: {
            type: Number
        },
        busi_address: {
            type: String
        },
        busi_number: {
            type: String
        },
        nationality: {
            type: String
        },
        religion: {
            type: String
        },
        blood_type: {
            type: String
        },
        sss: {
            type: String
        },
        gsis: {
            type: String
        },
        tin: {
            type: String
        },
        philhealth: {
            type: String
        },
        eyes: {
            type: String
        },
        hair: {
            type: String
        },
        size_boots: {
            type: String
        },
        size_cap: {
            type: String
        },
        size_bda: {
            type: String
        },
        spoken_dialects: {
            type: String
        },
        skills: {
            type: String
        },
        emergency_name: {
            type: String
        },
        emergency_address: {
            type: String
        },
        emergency_relation: {
            type: String
        },
        emergency_number: {
            type: String
        },
        reservist_status: {
            type: String
        },
        mobilization_unit: {
            type: String
        },
        db_admin: {
            type: String
        },
        db_admin_rank: {
            type: String
        },
        db_admin_adv: {
            type: String
        },
        db_admin_afos: {
            type: String
        },
        db_admin_post: {
            type: String
        },
        photo: {
            type: String,
            required: [true, 'Please add a photo'],
            default: '/images/profile.jpg'
        }, 
        complexion: {
            type: String
        },
        photobig: {
            type: String
        },
        deceased: {
            type: Boolean
        },
        deceased_verified: {
            type: String
        },
        oldrank: {
            type: Number
        },
        olddate: {
            type: String
        },
        highest_schooling: {
            type: String
        },
        old_schooling: {
            type: String
        },
        newtraining: {
            type: String
        },
        oldtraining: {
            type: String
        },
        contact_number: {
            type: String
        },
        grade: {
            type: String
        },
        PromotionAuthority: {
            type: String
        },
        rankabbr: {
            type: String
        },
        exclude: {
            type: Number
        },
        excluded_by: {
            type: Number
        },
        admin: {
            type: Number
        },
        temp_id: {
            type: Number
        },
        gender: {
            type: String
        },
        complete: {
            type: Number
        },
        score: {
            type: Number
        },
        datagrp: {
            type: Number
        },
        username: {
            type: String,
            trim: true
        },
        passphrase: {
            type: String,
            trim: true
        },
        educlevel: {
            type: String
        },
        fos: {
            type: String,
            trim: true
        },
        rotc: {
            type: Number
        },
        engineer: {
            type: Number
        },
        engineer_course: {
            type: String,
            trim: true
        },
        date_incorporated: {
            type: String
        },
        date_retired: {
            type: String
        },
        unit_designation: {
            type: String,
            trim: true
        },
        dateUnitDesignation: {
            type: String
        },
        unitDesignationAuthority: {
            type: String,
            trim: true
        },
        unitAssignment: {
            type: String,
            trim: true
        },
        effec_date_unit: {
            type: String
        },
        unitAssignmentAuthority: {
            type: String,
            trim: true
        },
        afprcen_id: {
            type: Number
        },
        adt: {
            type: String
        },
        recorded: {
            type: String
        },
        gsc: {
            type: Boolean
        },
        civil_status: {
            type: String,
            trim: true
        },
        branchOfService: {
            type: String
        },
        brsvc_id: {
            type: String,
            trim: true
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        education: [{
            course: { type: String },
            school: { type: String },
            location: { type: String },
            date_started: { type: String },
            date_completed: { type: String },
            educ_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                default: false 
            },
            coursePdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                default: false 
            },
        }],
        training: [{
            course: { type: String },
            school: { type: String },
            conducted_by: { type: String },
            date_started: { type: String },
            date_completed: { type: String },
            train_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            coursePdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        activeDuty: [{
            soNumber: { type: String },
            adtUnitAssignment: { type: String },
            dateStart: { type: String },
            dateEnd: { type: String },
            adt_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            coursePdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        userDesignation: [{
            so_Number: { type: String },
            unitDesignation: { type: String },
            date_start: { type: Date },
            date_end: { type: String },
            designation_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            designationPdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        awards: [{
            award_type: { type: String },
            authority_from: { type: String },
            date_awarded: { type: String },
            award_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            awardPdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        dependents: [{
            dep_name: { type: String },
            dep_relation: { type: String },
            dep_birthdate: { type: Date },
            dep_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            dependentPdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        promotions: [{
            prom_from: { type: String },
            prom_to: { type: String },
            rank_code: { type: String },
            prom_authority: { type: String },
            prom_effectivity: { type: Date },
            brsvc: { type: String },
            prom_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            promotionPdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        activities: [{
            mil_activity: { type: String },
            mil_unit: { type: String },
            mil_venue: { type: String },
            mil_startdate: { type: String },
            mil_enddate: { type: String },
            act_id: { type: Number },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            activityPdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        derogatory: [{
            complaint: { type: String },
            dateFiled: { type: String },
            adminUnit: { type: String },
            caseStatus: { type: String },
            disposition: { type: String },
            remarks: { type: String },
            user_id: { type: Number },
            isGood: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            isViewed: { 
                type: Boolean, 
                required: true,
                default: false 
            },
            derogatoryPdf: {
                type: String
            },
            isUploaded: { 
                type: Boolean, 
                required: true,
                default: false 
            },   
        }],
        isMain: {
            type: Boolean,
            required: true,
            default: false
        },
        isEduc: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        isTraining: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        isActiveDuty: { 
            type: Boolean, 
            required: true, 
            default: false 
        },
        isDesignation: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        isAwards: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        isDependents: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        isPromotions: { 
            type: Boolean,
            required: true,
            default: false 
        },
        isActivities: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        isDerogatory: { 
            type: Boolean, 
            required: true,
            default: false 
        },
        reserveGroup: {
            type: String
        },
        bos: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
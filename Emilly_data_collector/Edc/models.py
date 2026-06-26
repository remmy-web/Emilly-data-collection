from django.db import models


class OnionRetailSurvey(models.Model):

    # SECTION A
    gender = models.CharField(max_length=20)
    age_group = models.CharField(max_length=50)
    marital_status = models.CharField(max_length=50)
    household_size = models.PositiveIntegerField()

    main_occupation = models.CharField(max_length=100)
    other_occupation = models.CharField(max_length=255, blank=True)

    member_of_group = models.BooleanField(default=False)
    group_name = models.CharField(max_length=255, blank=True)

    access_to_credit = models.BooleanField(default=False)
    credit_source = models.CharField(max_length=100, blank=True)

    years_schooling = models.PositiveIntegerField(null=True, blank=True)
    education_level = models.CharField(max_length=100, blank=True)

    years_in_onion_retailing = models.PositiveIntegerField(null=True, blank=True)

    business_nature = models.CharField(max_length=100, blank=True)

    onion_source = models.CharField(max_length=100, blank=True)
    major_customers = models.CharField(max_length=100, blank=True)

    # SECTION B
    weekly_purchase_kg = models.FloatField(null=True, blank=True)
    avg_purchase_price = models.FloatField(null=True, blank=True)
    avg_selling_price = models.FloatField(null=True, blank=True)
    weekly_sales_kg = models.FloatField(null=True, blank=True)

    weekly_revenue = models.FloatField(null=True, blank=True)
    weekly_transport_cost = models.FloatField(null=True, blank=True)

    stall_rent = models.FloatField(default=0)
    market_dues = models.FloatField(default=0)
    packaging_materials = models.FloatField(default=0)
    loading_offloading = models.FloatField(default=0)
    casual_labour = models.FloatField(default=0)
    storage_expenses = models.FloatField(default=0)

    other_cost_description = models.CharField(max_length=255, blank=True)
    other_cost_amount = models.FloatField(default=0)

    profitability_opinion = models.CharField(max_length=100, blank=True)

    # SECTION C
    experience_spoilage = models.BooleanField(default=False)

    weekly_spoilage_kg = models.FloatField(null=True, blank=True)

    spoilage_percentage = models.CharField(max_length=50, blank=True)

    money_loss_spoilage = models.FloatField(null=True, blank=True)

    spoilage_stage = models.CharField(max_length=100, blank=True)

    causes_spoilage = models.JSONField(default=list)

    storage_facility = models.BooleanField(default=False)

    storage_type = models.CharField(max_length=100, blank=True)
    storage_type_other = models.CharField(max_length=255, blank=True)

    onions_stay_duration = models.CharField(max_length=100, blank=True)

    received_training = models.BooleanField(default=False)

    spoilage_effects = models.JSONField(default=list)
    strategies = models.JSONField(default=list)

    other_strategy = models.CharField(max_length=255, blank=True)

    # SECTION D
    major_challenges = models.TextField(blank=True)
    measures_to_reduce = models.TextField(blank=True)
    other_comments = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Respondent: {self.id} sex:{self.gender} - {self.created_at:%Y-%m-%d}"
from app.database.supabase import supabase


class CompanyService:

    def create_company(self, owner_id: str, payload):
        """
        Creates a company along with its onboarding profile.
        """

        # Prevent duplicate companies for the same owner
        existing = (
            supabase.table("companies")
            .select("id")
            .eq("owner_id", owner_id)
            .limit(1)
            .execute()
        )

        if existing.data:
            raise Exception("Company already exists for this user.")

        # Create company
        company_response = (
            supabase.table("companies")
            .insert(
                {
                    "owner_id": owner_id,
                    "name": payload.name,
                    "description": payload.description,
                    "industry": payload.industry,
                    "company_size": payload.company_size,
                }
            )
            .execute()
        )

        company = company_response.data[0]
        company_id = company["id"]

        # Create onboarding profile
        profile_response = (
            supabase.table("company_profile")
            .insert(
                {
                    "company_id": company_id,
                    "customers": payload.customers,
                    "acquisition_channels": payload.acquisition_channels,
                    "annual_goal": payload.annual_goal,
                    "challenges": payload.challenges,
                    "decision_style": payload.decision_style,
                    "company_values": payload.company_values,
                    "ai_expectations": payload.ai_expectations,
                    "proactivity_level": payload.proactivity_level,
                    "ai_boundaries": payload.ai_boundaries,
                    "onboarding_completed": True,
                }
            )
            .execute()
        )

        return {
            "company": company,
            "profile": profile_response.data[0],
        }

    def get_company(self, owner_id: str):
        """
        Returns the authenticated user's company.
        """

        company_response = (
            supabase.table("companies")
            .select("*")
            .eq("owner_id", owner_id)
            .limit(1)
            .execute()
        )

        if not company_response.data:
            return None

        company = company_response.data[0]

        profile_response = (
            supabase.table("company_profile")
            .select("*")
            .eq("company_id", company["id"])
            .limit(1)
            .execute()
        )

        profile = (
            profile_response.data[0]
            if profile_response.data
            else None
        )

        return {
            "company": company,
            "profile": profile,
        }


company_service = CompanyService()
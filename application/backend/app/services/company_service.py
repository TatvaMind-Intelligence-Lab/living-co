from app.database.supabase import supabase


class CompanyService:

    @staticmethod
    async def create_company(owner_id: str, company):

        response = (
            supabase.table("companies")
            .insert(
                {
                    "owner_id": owner_id,
                    "name": company.name,
                    "description": company.description,
                    "customers": company.customers,
                    "challenge": company.challenge,
                    "memory": company.memory,
                }
            )
            .execute()
        )

        return response.data[0]

    @staticmethod
    def get_company(owner_id: str):
        response = (
            supabase.table("companies")
            .select("*")
            .eq("owner_id", owner_id)
            .limit(1)
            .execute()
        )

        if not response.data:
            return None

        return response.data[0]
    
company_service = CompanyService()
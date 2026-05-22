from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "Kitchen Trust AI Service Running"
    }


@app.post("/predict-risk")
def predict_risk(data: dict):

    hygiene_score = data.get(
        "hygieneScore", 0
    )

    trust_score = data.get(
        "trustScore", 0
    )

    average = (
        hygiene_score + trust_score
    ) / 2

    if average >= 85:
        risk = "LOW RISK"

    elif average >= 60:
        risk = "MEDIUM RISK"

    else:
        risk = "HIGH RISK"

    return {
        "riskLevel": risk,
        "averageScore": average,
    }


@app.post("/generate-insight")
def generate_insight(data: dict):

    hygiene_score = data.get(
        "hygieneScore", 0
    )

    trust_score = data.get(
        "trustScore", 0
    )

    average = (
        hygiene_score + trust_score
    ) / 2

    if average >= 85:

        insight = (
            "This kitchen demonstrates excellent hygiene compliance and strong operational safety standards."
        )

    elif average >= 60:

        insight = (
            "This kitchen maintains moderate compliance but requires periodic sanitation monitoring."
        )

    else:

        insight = (
            "This kitchen shows elevated operational risk and requires immediate inspection attention."
        )

    return {
        "insight": insight
    }
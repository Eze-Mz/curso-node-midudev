const z = require('zod');

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: "El título debe ser un string",
        required_error: "El título es requerido"
    }).min(1).max(100).nonempty(),
    genre: z.array(z.enum(["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy",]),{
        invalid_type_error: "El género debe ser un array",
        required_error: "El género es requerido"
    }),
    year: z.number().int().min(1888).max(2023),
    duration: z.number().int().positive(),
    rate: z.number().default(0),
    poster: z.string().url(),
    director: z.string().min(1).max(100).nonempty()
});

function validateMovie(object) {
    return movieSchema.safeParse(object);
}

function validatePartialMovie(object) {
    return movieSchema.partial().safeParse(object);
}

module.exports = {
    validateMovie,
    validatePartialMovie
}
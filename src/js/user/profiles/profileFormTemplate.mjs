/**
 * Takes in an argument type in order to create the HTML template for media editing.
 * @param {string} type the type of form to create, avatar/banner
 * @example
 * ```js
 * editProfileMediaFormTemplate("avatar")
 * // Expect the function to build a form for editing "avatar"
 * ```
 */
export const editProfileMediaFormTemplate = (type) => `
<div class="card-profile d-flex justify-content-center">
    <form class="card-footer py-3 px-3 border-0 w-100 rounded update-${type}-form" style="background-color: #f8f9fa">
        <div class="form-group mt-1 mb-2">
            <input type="text" class="form-control w-100" id="edit-${type}-input" aria-describedby="${type}Help" placeholder="Enter a new ${type}" required />
        </div>
        <div class="button-wrap d-flex justify-content-between align-items-center">
            <div class="mt-2 pt-1 float-end">
                <button type="submit" class="btn btn-primary btn-sm">Update ${type}</button>
                <button type="button" id="clearInput" class="btn btn-primary btn-sm">Clear</button>
            </div>
        </div>
    </form>
</div>`;

"use strict";

/**
 * Avatar — lightweight profile photo manager.
 *
 * Photos are stored as base64 data-URLs in localStorage, keyed by user ID.
 * This requires zero server/DB changes.
 *
 * API
 * ───
 *   Avatar.set(uid, dataUrl)          — persist a photo for a user
 *   Avatar.get(uid)                   — retrieve photo (or null)
 *   Avatar.remove(uid)                — delete a user's photo
 *   Avatar.apply(element, uid, init)  — render photo or initials into element
 *   Avatar.applyImg(element, uid)     — set img src only (for <img> tags)
 */
const Avatar = {
  _key(uid) {
    return `ewumart_avatar_${uid}`;
  },

  /** Persist a base64 data-URL for uid. */
  set(uid, dataUrl) {
    localStorage.setItem(Avatar._key(uid), dataUrl);
  },

  /** Return the stored data-URL, or null if none. */
  get(uid) {
    return localStorage.getItem(Avatar._key(uid)) || null;
  },

  /** Remove stored photo for uid. */
  remove(uid) {
    localStorage.removeItem(Avatar._key(uid));
  },

  /**
   * Apply photo (or initials fallback) to a generic container element.
   * The element should have a fixed width/height set via CSS class.
   *
   * @param {HTMLElement} el     — the avatar container
   * @param {number}      uid    — user ID
   * @param {string}      init   — initials string (fallback)
   */
  apply(el, uid, init) {
    const photo = Avatar.get(uid);
    if (photo) {
      // Show photo, hide text
      el.textContent = "";
      el.style.backgroundImage = `url('${photo}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.style.backgroundRepeat = "no-repeat";
    } else {
      // Show initials, clear any old photo
      el.textContent = init;
      el.style.backgroundImage = "";
    }
  },

  /**
   * Generate an inline avatar HTML string for use inside innerHTML templates.
   * Returns either an <img> or a <div> with initials.
   *
   * @param {number} uid   — user ID
   * @param {string} init  — initials fallback
   * @param {string} cls   — CSS class to apply to the element
   * @param {string} style — extra inline styles
   * @returns {string} HTML string
   */
  html(uid, init, cls = "", style = "") {
    const photo = Avatar.get(uid);
    if (photo) {
      return `<div class="${cls}" style="${style}background-image:url('${photo}');background-size:cover;background-position:center;"></div>`;
    }
    return `<div class="${cls}" style="${style}">${init}</div>`;
  },
};
